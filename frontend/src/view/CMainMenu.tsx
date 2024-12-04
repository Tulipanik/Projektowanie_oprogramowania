import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";
import { UCShowCateringCompanyMainWindow } from "../use_cases/UCSShowCateringCompanyMainWindow";

export function CMainMenu(
  ucsShowClientMainWindow?: UCShowClientMainWindow,
  usShowCateringCompanyMainWindow?: UCShowCateringCompanyMainWindow
) {
  function showClientMainWindow() {
    ucsShowClientMainWindow?.handleShowClientMainWindowBtnClick();
  }

  function showCateringCompanyMainWindow() {
    usShowCateringCompanyMainWindow?.showCateringCompanyMainWindow();
  }

  return { showClientMainWindow, showCateringCompanyMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser: UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
