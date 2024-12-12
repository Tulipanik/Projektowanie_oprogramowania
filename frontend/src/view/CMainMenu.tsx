import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";

import { UCShowCateringCompanyMainWindow } from "../use_cases/UCSShowCateringCompanyMainWindow";
import { UCShowStorekeeperMainWindow } from "../use_cases/UCShowStorekeeperMainWindow";
import { UCShowManagerMainWindow } from "../use_cases/UCShowManagerMainWindow";
import { UCSShowCourierMainWindow } from "../use_cases/UCSShowCourierMainWindow";

export function CMainMenu(
  ucsShowClientMainWindow?: UCShowClientMainWindow,
  usShowCateringCompanyMainWindow?: UCShowCateringCompanyMainWindow,
  ucShowStorekeeperMainWindow?:UCShowStorekeeperMainWindow,
  ucShowManagerMainWindow?: UCShowManagerMainWindow,
  ucsShowCourierMainWindow?: UCSShowCourierMainWindow,
) {
  
  function showClientMainWindow() {
    ucsShowClientMainWindow?.handleShowClientMainWindowBtnClick();
  }
  
  function showCateringCompanyMainWindow() {
    usShowCateringCompanyMainWindow?.showCateringCompanyMainWindow();
  }
  
  function showStorekeeperMainWindow() {
    ucShowStorekeeperMainWindow?.handleShowStorekeeperMainWindowBtnClick();
  }
  
  function showCourierMainWindow() {
    ucsShowCourierMainWindow?.handleShowCourierMainWindowBtnClick();
  }

  function showManagerMainWindow() {
    ucShowManagerMainWindow?.showManagerMainWindow();
  }

  return { showClientMainWindow, showCourierMainWindow, showCateringCompanyMainWindow, showStorekeeperMainWindow, showManagerMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser: UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
