import "./styles.css";
import { useReducer } from "react";
import { AppState, ScreenId } from "./view_model/Types";
import VMainMenu from "./view/VMainMenu";
import VClientListWnd from "./view/VClientListWnd";
import { PClientListWnd } from "./view/PClientListWnd";
import { PMainMenu } from "./view/PMainMenu";
import { UCShowClientList } from "./use_cases/UCShowClientList";
import { IClients, ClientsProxy } from "./services/IClients";

const pCLW: PClientListWnd = new PClientListWnd();
const pMM: PMainMenu = new PMainMenu();

const iCl: IClients = new ClientsProxy();

const ucSCL: UCShowClientList = new UCShowClientList(pCLW, pMM, iCl);

function switchView(state: AppState, action: ScreenId) {
  let newState = { ...state };
  switch (action) {
    case ScreenId.CLIENTLISTWND:
      newState.screen = ScreenId.CLIENTLISTWND;
      break;
    case ScreenId.MAINMENU:
      newState.screen = ScreenId.MAINMENU;
  }
  return newState;
}

export default function App() {
  const [state, globalUpdateView] = useReducer(switchView, {
    screen: ScreenId.MAINMENU,
    login: ""
  });

  pCLW.injectGlobalUpdateView(globalUpdateView);
  pMM.injectGlobalUpdateView(globalUpdateView);

  return (
    <div className="App">
      <h1>Money Transfer System ({state.screen}) </h1>
      {VMainMenu(state.screen === ScreenId.MAINMENU, pMM, ucSCL)}
      {VClientListWnd(state.screen === ScreenId.CLIENTLISTWND, pCLW, ucSCL)}
    </div>
  );
}
