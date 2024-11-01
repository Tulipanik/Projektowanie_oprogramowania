import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";

export function CMainMenu(ucsShowClientMainWindow: UCShowClientMainWindow) {
  function showClientMainWindow() {
    ucsShowClientMainWindow.showClientMainWindow()
  }

  return { showClientMainWindow };
}
