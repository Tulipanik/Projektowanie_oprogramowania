import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";
import { UCShowCateringCompanyMainWindow } from "../use_cases/UCSShowCateringCompanyMainWindow";
import { UCShowAdminMainWindow } from "../use_cases/UCShowAdminMainWindow";
import { UCShowStorekeeperMainWindow } from "../use_cases/UCShowStorekeeperMainWindow";

export function CMainMenu(
  ucsShowClientMainWindow?: UCShowClientMainWindow,
  usShowCateringCompanyMainWindow?: UCShowCateringCompanyMainWindow,
  ucShowAdminMainWindow?:UCShowAdminMainWindow,
  ucShowStorekeeperMainWindow?:UCShowStorekeeperMainWindow

) {
  
  function showClientMainWindow() {
    ucsShowClientMainWindow?.handleShowClientMainWindowBtnClick();
  }
  
  function showCateringCompanyMainWindow() {
    usShowCateringCompanyMainWindow?.showCateringCompanyMainWindow();
  }
  
  function showAdminMainWindow(){
    ucShowAdminMainWindow?.showAdminMainWindow();
  }
  
  function showStorekeeperMainWindow() {
    ucShowStorekeeperMainWindow?.handleShowStorekeeperMainWindowBtnClick();
  }
  
  return { showClientMainWindow, showCateringCompanyMainWindow, showAdminMainWindow, showStorekeeperMainWindow };
}

export function CMainMenuLogout(ucsAuthorizeUser: UCAuthorizeUser) {
  function showLogoutWindow() {
    ucsAuthorizeUser.unauthorizeUSer();
  }

  return { showLogoutWindow };
}
