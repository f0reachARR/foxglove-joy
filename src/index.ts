import { ExtensionContext } from "@foxglove/extension";

import { initJoystickPanel } from "./JoystickPanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "joystick-panel", initPanel: initJoystickPanel });
}
