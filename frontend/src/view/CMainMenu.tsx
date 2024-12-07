import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";
import { UCShowCateringCompanyMainWindow } from "../use_cases/UCSShowCateringCompanyMainWindow";
import { UCShowManagerMainWindow } from "../use_cases/UCShowManagerMainWindow";

export function CMainMenu(
  ucsShowClientMainWindow?: UCShowClientMainWindow,
  usShowCateringCompanyMainWindow?: UCShowCateringCompanyMainWindow,
  ucShowManagerMainWindow?:UCShowManagerMainWindow

) {
  function showClientMainWindow() {
    ucsShowClientMainWindow?.handleShowClientMainWindowBtnClick();
  }

  function showCateringCompanyMainWindow() {
    usShowCateringCompanyMainWindow?.showCateringCompanyMainWindow();
  }

  function showManagerMainWindow(){
    ucShowManagerMainWindow?.showManagerMainWindow();
  }

  return { showClientMainWindow, showCateringCompanyMainWindow, showManagerMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser: UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
