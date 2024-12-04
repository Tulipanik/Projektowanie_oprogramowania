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
import { UCAuthorizeUser } from "./use_cases/UCSAuthorization";
import { PAuthMenu } from "./view/PAuthMenu";
import { AuthorizationConst } from "./services/AuthorizationConst";
import { AuthService } from "./services/AuthService";

const pMainMenu = new PMainMenu();
const pClientMainWindow = new PClientMainWindow();
const pCateringCompanyMainWindow = new PCateringCompanyMainWindow();
const pAuthorization = new PAuthMenu();

const usShowClientMainWindow = new UCShowClientMainWindow(
  pMainMenu,
  pClientMainWindow
);

const usShowCateringCompanyMainWindow = new UCShowCateringCompanyMainWindow(
  pMainMenu,
  pCateringCompanyMainWindow
);
const usAuthorization = new UCAuthorizeUser(pAuthorization,pMainMenu);

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
  pCateringCompanyMainWindow.injectGlobalUpdateView(globalUpdateView);
  pAuthorization.injectGlobalUpdateView(globalUpdateView);

  AuthorizationConst.inject(new AuthService());


  return (
    <div className="App">
      {VAuthMenu(state.screen === ScreenId.AUTH,usAuthorization)}
      {VMainMenu(
        state.screen === ScreenId.MAIN_MENU,
        usShowClientMainWindow,
        usShowCateringCompanyMainWindow
      ,usAuthorization)}
      {VClientMainWindow(
        state.screen === ScreenId.CLIENT_MAIN_WINDOW,
        usShowClientMainWindow,
        pClientMainWindow
      )}
      {VCateringCompanyMainWindow(
        state.screen === ScreenId.COURIER_COMPANY_MAIN_WINDOW,
        usShowCateringCompanyMainWindow,
        pCateringCompanyMainWindow
      )}
    </div>
  );
}