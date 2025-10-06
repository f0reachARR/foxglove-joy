import { useEffect, useState } from "react";

export interface GamepadState {
  gamepad: Gamepad | null;
  isConnected: boolean;
}

export function useGamepad(): GamepadState {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateGamepad = () => {
      const gamepads = navigator.getGamepads();
      const connectedGamepad = gamepads[0]; // Use first connected gamepad

      if (connectedGamepad) {
        setGamepad(connectedGamepad);
        setIsConnected(true);
      } else {
        setGamepad(null);
        setIsConnected(false);
      }

      animationFrameId = requestAnimationFrame(updateGamepad);
    };

    const handleGamepadConnected = (e: GamepadEvent) => {
      console.log("Gamepad connected:", e.gamepad.id);
      setIsConnected(true);
    };

    const handleGamepadDisconnected = (e: GamepadEvent) => {
      console.log("Gamepad disconnected:", e.gamepad.id);
      setIsConnected(false);
      setGamepad(null);
    };

    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

    animationFrameId = requestAnimationFrame(updateGamepad);

    return () => {
      window.removeEventListener("gamepadconnected", handleGamepadConnected);
      window.removeEventListener("gamepaddisconnected", handleGamepadDisconnected);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { gamepad, isConnected };
}
