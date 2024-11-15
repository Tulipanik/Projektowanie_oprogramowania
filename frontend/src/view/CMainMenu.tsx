import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";
import { UCShowCourierCompanyMainWindow } from "../use_cases/UCSShowCourierCompanyMainWindow";

export function CMainMenu(
  ucsShowClientMainWindow?: UCShowClientMainWindow,
  usShowCourierCompanyMainWindow?: UCShowCourierCompanyMainWindow
) {
  function showClientMainWindow() {
    ucsShowClientMainWindow?.showClientMainWindow();
  }

  function showCourierCompanyMainWindow() {
    usShowCourierCompanyMainWindow?.showCourierCompanyMainWindow();
  }

  return { showClientMainWindow, showCourierCompanyMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser:UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
