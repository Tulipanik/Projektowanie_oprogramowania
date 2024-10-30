import "./styles.css";
import { useEffect, useReducer } from "react";
import { AppState, ScreenId } from "./view_model/Types";
import VMainMenu from "./view/VMainMenu";
import VClientListWnd from "./view/VClientListWnd";
import { PClientListWnd } from "./view/PClientListWnd";
import { PMainMenu } from "./view/PMainMenu";
import { UCShowClientList } from "./use_cases/UCShowClientList";
import { IClients, ClientsProxy } from "./services/IClients";
import { PClientMainWindow } from "./view/client/ClientMainWindow/PClientMainWindow";
import { UCShowClientMainWindow } from "./use_cases/UCSShowClientWindow";
import { VClientMainWindow } from "./view/client/ClientMainWindow/VClientMainWindow";
import { PClientDishes } from "./view/client/ClientDishes/PClientDishes";
import { UCSShowClientDishList } from "./use_cases/UCSShowClientDishList";
import { DishesProxy, IDishesApi } from "./services/IDishes";

const pClientListWindow = new PClientListWnd();
const pMainMenu = new PMainMenu();
const pClientMainWindow = new PClientMainWindow();


const usShowClientMainWindow = new UCShowClientMainWindow(pMainMenu, pClientMainWindow);

function switchView(state: AppState, action: ScreenId) {
  let newState = { ...state };
  newState.screen = action;
  return newState;
}

export default function App() {
  const [state, globalUpdateView] = useReducer(switchView, {
    screen: ScreenId.MAINMENU,
    login: ""
  });

  useEffect(() => {
    console.log("App state: ", state);
  }, [state])

  pClientListWindow.injectGlobalUpdateView(globalUpdateView);
  pMainMenu.injectGlobalUpdateView(globalUpdateView);
  pClientMainWindow.injectGlobalUpdateView(globalUpdateView);

  return (
    <div className="App">
      {VMainMenu(state.screen === ScreenId.MAINMENU, usShowClientMainWindow)}
      {VClientMainWindow(state.screen === ScreenId.CLIENT_MAIN_WINDOW, pClientMainWindow)}
    </div>
  );
}
