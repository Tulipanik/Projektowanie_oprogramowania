import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";

export function CMainMenu(ucsShowClientMainWindow: UCShowClientMainWindow) {
  function showClientMainWindow() {
    ucsShowClientMainWindow.showClientMainWindow();
  }

  return { showClientMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser:UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
