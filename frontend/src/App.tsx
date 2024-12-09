import { useEffect, useReducer } from "react";
import "./styles.css";
import { UCShowClientMainWindow } from "./use_cases/UCSShowClientWindow";
import { PClientMainWindow } from "./view/client/ClientMainWindow/PClientMainWindow";
import { VClientMainWindow } from "./view/client/ClientMainWindow/VClientMainWindow";
import { PMainMenu } from "./view/PMainMenu";
import VMainMenu from "./view/VMainMenu";
import VAuthMenu from "./view/VAuthMenu";
import { AppState, ScreenId } from "./view_model/Types";
import { PCateringCompanyMainWindow } from "./view/catering_company/CateringCompanyMainWindow/PCateringCompanyMainWindow";
import { UCShowCateringCompanyMainWindow } from "./use_cases/UCSShowCateringCompanyMainWindow";
import { VCateringCompanyMainWindow } from "./view/catering_company/CateringCompanyMainWindow/VCateringCompanyMainWindow";
import { UCShowAdminMainWindow } from "./use_cases/UCShowAdminMainWindow";
import { PAdminMainWindow } from "./view/admin/AdminMainWindow/PAdminMainWindow";
import { UCAuthorizeUser } from "./use_cases/UCSAuthorization";
import { PAuthMenu } from "./view/PAuthMenu";
import { AuthorizationConst } from "./services/AuthorizationConst";
import { AuthService } from "./services/AuthService";
import { UCSShowCourierMainWindow } from "./use_cases/UCSShowCourierMainWindow";
import { PCourierMainWindow } from "./view/courier/CourierMainWindow/PCourierMainWindow";
import { VCourierMainWindow } from "./view/courier/CourierMainWindow/VCourierMainWindow";
import { VAdminMainWindow } from "./view/admin/AdminMainWindow/VAdminMainWindow";

const pMainMenu = new PMainMenu();
const pClientMainWindow = new PClientMainWindow();
const pCateringCompanyMainWindow = new PCateringCompanyMainWindow();
const pAdminMainWindow = new PAdminMainWindow();
const pAuthorization = new PAuthMenu();
const pCourierMainWindow = new PCourierMainWindow();

const usShowClientMainWindow = new UCShowClientMainWindow(
  pMainMenu,
  pClientMainWindow
);

const usShowCateringCompanyMainWindow = new UCShowCateringCompanyMainWindow(
  pMainMenu,
  pCateringCompanyMainWindow
);

const ucsShowCourierMainWindow = new UCSShowCourierMainWindow(pMainMenu, pCourierMainWindow);
const ucShowAdminMainWindow = new UCShowAdminMainWindow(
  pMainMenu,
  pAdminMainWindow
);

const usAuthorization = new UCAuthorizeUser(pAuthorization, pMainMenu);

function switchView(state: AppState, action: ScreenId) {
  let newState = { ...state };
  newState.screen = action;
  return newState;
}

export default function App() {
  const [state, globalUpdateView] = useReducer(switchView, {
    screen: ScreenId.AUTH,
    login: ""
  });

  useEffect(() => {
    console.log("App state: ", state);
  }, [state]);

  pMainMenu.injectGlobalUpdateView(globalUpdateView);
  pClientMainWindow.injectGlobalUpdateView(globalUpdateView);
  pAdminMainWindow.injectGlobalUpdateView(globalUpdateView);
  pAuthorization.injectGlobalUpdateView(globalUpdateView);
  pCourierMainWindow.injectGlobalUpdateView(globalUpdateView);
  pCateringCompanyMainWindow.injectGlobalUpdateView(globalUpdateView);

  AuthorizationConst.inject(new AuthService());


  return (
    <div className="App">
      {VAuthMenu(state.screen === ScreenId.AUTH, usAuthorization)}
      {VMainMenu(
        state.screen === ScreenId.MAIN_MENU,
        usShowClientMainWindow,
        usShowCateringCompanyMainWindow,
        ucShowAdminMainWindow,
        usAuthorization,
        ucsShowCourierMainWindow)}
      {VClientMainWindow(
        state.screen === ScreenId.CLIENT_MAIN_WINDOW,
        usShowClientMainWindow,
        pClientMainWindow
      )}
      {VCateringCompanyMainWindow(
        state.screen === ScreenId.CATERING_COMPANY_MAIN_WINDOW,
        usShowCateringCompanyMainWindow,
        pCateringCompanyMainWindow
      )}
      {VAdminMainWindow(
        state.screen === ScreenId.ADMIN_MAIN_WINDOW,
        ucShowAdminMainWindow,
        pAdminMainWindow
      )}
      {VCourierMainWindow(
        state.screen === ScreenId.COURIER_MAIN_WINDOW,
        ucsShowCourierMainWindow,
        pCourierMainWindow
      )}
    </div>
  );
}