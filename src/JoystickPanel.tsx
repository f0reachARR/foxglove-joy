import {
  MessageEvent,
  PanelExtensionContext,
  SettingsTreeAction,
  SettingsTreeNodes,
  Topic,
} from "@foxglove/extension";
import { ReactElement, useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import DualSense from "./DualSense";
import { useGamepad } from "./useGamepad";

type Mode = "publish" | "visualize";

type Config = {
  mode: Mode;
  topic: string;
  buttonMapping: number[];
  axesMapping: number[];
};

const DEFAULT_CONFIG: Config = {
  mode: "visualize",
  topic: "/joy",
  buttonMapping: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  axesMapping: [0, 1, 2, 3],
};

// ROS sensor_msgs/Joy message type
type JoyMessage = {
  header: {
    seq: number;
    stamp: {
      sec: number;
      nsec: number;
    };
    frame_id: string;
  };
  axes: number[];
  buttons: number[];
};

function JoystickPanel({ context }: { context: PanelExtensionContext }): ReactElement {
  const [config, setConfig] = useState<Config>(() => {
    const partialConfig = context.initialState as Partial<Config>;
    return { ...DEFAULT_CONFIG, ...partialConfig };
  });

  const [topics, setTopics] = useState<readonly Topic[]>([]);
  const [messages, setMessages] = useState<readonly MessageEvent[]>([]);
  const [renderDone, setRenderDone] = useState<(() => void) | undefined>();
  const { gamepad, isConnected } = useGamepad();

  // Save config changes
  useEffect(() => {
    context.saveState(config);
  }, [config, context]);

  // Settings panel configuration
  const settingsActionHandler = useCallback((action: SettingsTreeAction) => {
    if (action.action === "update") {
      const { path, value } = action.payload;
      setConfig((prev) => {
        const newConfig = { ...prev };
        if (path[0] === "general" && path[1] === "mode") {
          newConfig.mode = value as Mode;
        } else if (path[0] === "general" && path[1] === "topic") {
          newConfig.topic = value as string;
        }
        return newConfig;
      });
    }
  }, []);

  const settingsTree: SettingsTreeNodes = useMemo(() => {
    const topicOptions = (topics ?? []).map((topic) => ({ value: topic.name, label: topic.name }));

    return {
      general: {
        label: "General",
        fields: {
          mode: {
            label: "Mode",
            input: "select",
            value: config.mode,
            options: [
              { label: "Publish (Controller → ROS)", value: "publish" },
              { label: "Visualize (ROS → Display)", value: "visualize" },
            ],
          },
          topic: {
            label: "Topic",
            input: "select",
            options: topicOptions,
            value: config.topic,
          },
        },
      },
    };
  }, [config]);

  useEffect(() => {
    context.updatePanelSettingsEditor({
      actionHandler: settingsActionHandler,
      nodes: settingsTree,
    });
  }, [context, settingsActionHandler, settingsTree]);

  // Setup render handler for ROS message subscription (visualize mode)
  useLayoutEffect(() => {
    context.onRender = (renderState, done) => {
      setRenderDone(() => done);
      setTopics(renderState.topics ?? []);
      setMessages(renderState.currentFrame ?? []);
    };

    context.watch("topics");
    context.watch("currentFrame");

    if (config.mode === "visualize") {
      context.subscribe([{ topic: config.topic }]);
    }

    return () => {
      context.subscribe([]);
    };
  }, [context, config.mode, config.topic]);

  // Advertise topic when in publish mode
  useEffect(() => {
    if (config.mode !== "publish") {
      return;
    }

    context.advertise?.(config.topic, "sensor_msgs/Joy");

    return () => {
      context.unadvertise?.(config.topic);
    };
  }, [context, config.mode, config.topic]);

  // Publish gamepad state to ROS topic (publish mode)
  useEffect(() => {
    if (config.mode !== "publish" || !isConnected || !gamepad) {
      return;
    }

    const joyMessage: JoyMessage = {
      header: {
        seq: 0,
        stamp: {
          sec: Math.floor(Date.now() / 1000),
          nsec: (Date.now() % 1000) * 1000000,
        },
        frame_id: "",
      },
      axes: config.axesMapping.map((idx) => gamepad.axes[idx] ?? 0),
      buttons: config.buttonMapping.map((idx) => (gamepad.buttons[idx]?.pressed ? 1 : 0)),
    };

    context.publish?.(config.topic, joyMessage);
  }, [config, gamepad, isConnected, context]);

  // Signal render done
  useEffect(() => {
    renderDone?.();
  }, [renderDone]);

  // Get the latest joy message for visualization
  const latestJoyMessage = useMemo(() => {
    if (config.mode !== "visualize" || messages.length === 0) {
      return null;
    }
    const joyMessages = messages.filter((msg) => msg.topic === config.topic);
    return joyMessages.length > 0
      ? (joyMessages[joyMessages.length - 1]?.message as JoyMessage)
      : null;
  }, [config.mode, config.topic, messages]);

  return (
    <div style={{ padding: "1rem", overflow: "auto", height: "100%" }}>
      <h2>Joystick Panel</h2>
      <div style={{ marginBottom: "1rem" }}>
        <div>
          <strong>Mode:</strong>{" "}
          {config.mode === "publish" ? "Publish to ROS" : "Visualize from ROS"}
        </div>
        <div>
          <strong>Topic:</strong> {config.topic}
        </div>
        <div>
          <strong>Gamepad Status:</strong> {isConnected ? "🟢 Connected" : "⚪ Disconnected"}
        </div>
        {isConnected && gamepad && (
          <div>
            <strong>Gamepad ID:</strong> {gamepad.id}
          </div>
        )}
      </div>

      {config.mode === "publish" ? (
        <div>
          <h3>Controller Input (Publishing to {config.topic})</h3>
          {isConnected ? <DualSense /> : <p>Please connect a gamepad to start publishing.</p>}
        </div>
      ) : (
        <div>
          <h3>ROS Topic Visualization ({config.topic})</h3>
          {latestJoyMessage ? (
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <strong>Axes:</strong>
                <div style={{ fontFamily: "monospace", marginTop: "0.5rem" }}>
                  {latestJoyMessage.axes.map((axis, idx) => (
                    <div key={idx}>
                      Axis {idx}: {axis.toFixed(4)}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <strong>Buttons:</strong>
                <div style={{ fontFamily: "monospace", marginTop: "0.5rem" }}>
                  {latestJoyMessage.buttons.map((button, idx) => (
                    <div key={idx}>
                      Button {idx}: {button ? "🟢" : "⚪"}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p>Waiting for messages on {config.topic}...</p>
          )}
        </div>
      )}
    </div>
  );
}

export function initJoystickPanel(context: PanelExtensionContext): () => void {
  const root = createRoot(context.panelElement);
  root.render(<JoystickPanel context={context} />);

  return () => {
    root.unmount();
  };
}
