import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";

import { UCShowCateringCompanyMainWindow } from "../use_cases/UCSShowCateringCompanyMainWindow";
import { UCShowAdminMainWindow } from "../use_cases/UCShowAdminMainWindow";
import { UCSShowCourierMainWindow } from "../use_cases/UCSShowCourierMainWindow";

export function CMainMenu(
  ucsShowClientMainWindow?: UCShowClientMainWindow,
  usShowCateringCompanyMainWindow?: UCShowCateringCompanyMainWindow,
  ucShowAdminMainWindow?: UCShowAdminMainWindow,
  ucsShowCourierMainWindow?: UCSShowCourierMainWindow,
) {
  function showClientMainWindow() {
    ucsShowClientMainWindow?.handleShowClientMainWindowBtnClick();
  }

  function showCateringCompanyMainWindow() {
    usShowCateringCompanyMainWindow?.showCateringCompanyMainWindow();
  }

  function showCourierMainWindow() {
    ucsShowCourierMainWindow?.handleShowCourierMainWindowBtnClick();
  }

  function showAdminMainWindow() {
    ucShowAdminMainWindow?.showAdminMainWindow();
  }

  return { showClientMainWindow, showCourierMainWindow, showCateringCompanyMainWindow, showAdminMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser: UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
