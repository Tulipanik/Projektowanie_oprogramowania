import { useEffect, useReducer } from "react";
import "./styles.css";
import { UCShowClientMainWindow } from "./use_cases/UCSShowClientWindow";
import { PClientMainWindow } from "./view/client/ClientMainWindow/PClientMainWindow";
import { VClientMainWindow } from "./view/client/ClientMainWindow/VClientMainWindow";
import { PMainMenu } from "./view/PMainMenu";
import VMainMenu from "./view/VMainMenu";
import VAuthMenu from "./view/VAuthMenu";
import { AppState, ScreenId } from "./view_model/Types";
import { UCAuthorizeUser } from "./use_cases/UCSAuthorization";
import { PAuthMenu } from "./view/PAuthMenu";
import { AuthorizationConst } from "./services/AuthorizationConst";
import { AuthServiceMock } from "./services/AuthServiceMock";
import { AuthService } from "./services/AuthService";

const pMainMenu = new PMainMenu();
const pClientMainWindow = new PClientMainWindow();
const pAuthorization = new PAuthMenu();


const usShowClientMainWindow = new UCShowClientMainWindow(pMainMenu, pClientMainWindow);
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
  }, [state])

  pMainMenu.injectGlobalUpdateView(globalUpdateView);
  pClientMainWindow.injectGlobalUpdateView(globalUpdateView);
  pAuthorization.injectGlobalUpdateView(globalUpdateView);

  AuthorizationConst.inject(new AuthService());

  return (
    <div className="App">
      {VAuthMenu(state.screen === ScreenId.AUTH,usAuthorization)}
      {VMainMenu(state.screen === ScreenId.MAIN_MENU, usShowClientMainWindow,usAuthorization)}
      {VClientMainWindow(state.screen === ScreenId.CLIENT_MAIN_WINDOW, usShowClientMainWindow, pClientMainWindow)}
    </div>
  );
}
