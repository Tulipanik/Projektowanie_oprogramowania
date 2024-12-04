import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";
import { UCShowCourierCompanyMainWindow } from "../use_cases/UCSShowCourierCompanyMainWindow";
import { UCSShowCourierMainWindow } from "../use_cases/UCSShowCourierMainWindow";

export function CMainMenu(
  ucsShowClientMainWindow?: UCShowClientMainWindow,
  usShowCourierCompanyMainWindow?: UCShowCourierCompanyMainWindow,
  ucsShowCourierMainWindow?: UCSShowCourierMainWindow,
) {
  function showClientMainWindow() {
    ucsShowClientMainWindow?.handleShowClientMainWindowBtnClick();
  }

  function showCourierCompanyMainWindow() {
    usShowCourierCompanyMainWindow?.showCourierCompanyMainWindow();
  }

  function showCourierMainWindow() {
    ucsShowCourierMainWindow?.handleShowCourierMainWindowBtnClick();
  }

  return { showClientMainWindow, showCourierCompanyMainWindow, showCourierMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser: UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
