import { useEffect, useReducer } from "react";
import "./styles.css";
import { UCShowClientMainWindow } from "./use_cases/UCSShowClientWindow";
import { PClientMainWindow } from "./view/client/ClientMainWindow/PClientMainWindow";
import { VClientMainWindow } from "./view/client/ClientMainWindow/VClientMainWindow";
import { PMainMenu } from "./view/PMainMenu";
import VMainMenu from "./view/VMainMenu";
import VAuthMenu from "./view/VAuthMenu";
import { AppState, ScreenId } from "./view_model/Types";
import { PCourierCompanyMainWindow } from "./view/courier_company/CourierCompanyMainWindow/PCourierCompanyMainWindow";
import { UCShowCourierCompanyMainWindow } from "./use_cases/UCSShowCourierCompanyMainWindow";
import { VCourierCompanyMainWindow } from "./view/courier_company/CourierCompanyMainWindow/VCourierCompanyMainWindow";
import { UCAuthorizeUser } from "./use_cases/UCSAuthorization";
import { PAuthMenu } from "./view/PAuthMenu";
import { AuthorizationConst } from "./services/AuthorizationConst";
import { AuthServiceMock } from "./mock/AuthServiceMock";
import { AuthService } from "./services/AuthService";
import { UCSShowCourierMainWindow } from "./use_cases/UCSShowCourierMainWindow";
import { PCourierMainWindow } from "./view/courier/CourierMainWindow/PCourierMainWindow";
import { VCourierMainWindow } from "./view/courier/CourierMainWindow/VCourierMainWindow";

const pMainMenu = new PMainMenu();
const pClientMainWindow = new PClientMainWindow();
const pCourierCompanyMainWindow = new PCourierCompanyMainWindow();
const pAuthorization = new PAuthMenu();
const pCourierMainWindow = new PCourierMainWindow();

const usShowClientMainWindow = new UCShowClientMainWindow(
  pMainMenu,
  pClientMainWindow
);

const usShowCourierCompanyMainWindow = new UCShowCourierCompanyMainWindow(
  pMainMenu,
  pCourierCompanyMainWindow
);

const ucsShowCourierMainWindow = new UCSShowCourierMainWindow(pMainMenu, pCourierMainWindow);
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
  pCourierCompanyMainWindow.injectGlobalUpdateView(globalUpdateView);
  pAuthorization.injectGlobalUpdateView(globalUpdateView);
  pCourierMainWindow.injectGlobalUpdateView(globalUpdateView);
  AuthorizationConst.inject(new AuthService());


  return (
    <div className="App">
      {VAuthMenu(state.screen === ScreenId.AUTH, usAuthorization)}
      {VMainMenu(
        state.screen === ScreenId.MAIN_MENU,
        usShowClientMainWindow,
        usShowCourierCompanyMainWindow,
        ucsShowCourierMainWindow,
        usAuthorization)}
      {VClientMainWindow(
        state.screen === ScreenId.CLIENT_MAIN_WINDOW,
        usShowClientMainWindow,
        pClientMainWindow
      )}
      {VCourierCompanyMainWindow(
        state.screen === ScreenId.COURIER_COMPANY_MAIN_WINDOW,
        usShowCourierCompanyMainWindow,
        pCourierCompanyMainWindow
      )}
      {VCourierMainWindow(
        state.screen === ScreenId.COURIER_MAIN_WINDOW,
        ucsShowCourierMainWindow,
        pCourierMainWindow
      )}
    </div>
  );
}