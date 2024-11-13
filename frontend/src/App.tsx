import { useEffect, useReducer } from "react";
import "./styles.css";
import { UCShowClientMainWindow } from "./use_cases/UCSShowClientWindow";
import { PClientMainWindow } from "./view/client/ClientMainWindow/PClientMainWindow";
import { VClientMainWindow } from "./view/client/ClientMainWindow/VClientMainWindow";
import { PMainMenu } from "./view/PMainMenu";
import VMainMenu from "./view/VMainMenu";
import { AppState, ScreenId } from "./view_model/Types";
import { PCourierCompanyMainWindow } from "./view/courier_company/CourierCompanyMainWindow/PCourierCompanyMainWindow";
import { UCShowCourierCompanyMainWindow } from "./use_cases/UCSShowCourierCompanyMainWindow";
import { VCourierCompanyMainWindow } from "./view/courier_company/CourierCompanyMainWindow/VCourierCompanyMainWindow";

const pMainMenu = new PMainMenu();
const pClientMainWindow = new PClientMainWindow();
const pCourierCompanyMainWindow = new PCourierCompanyMainWindow();

const usShowClientMainWindow = new UCShowClientMainWindow(
  pMainMenu,
  pClientMainWindow
);

const usShowCourierCompanyMainWindow = new UCShowCourierCompanyMainWindow(
  pMainMenu,
  pCourierCompanyMainWindow
);

function switchView(state: AppState, action: ScreenId) {
  let newState = { ...state };
  newState.screen = action;
  return newState;
}

export default function App() {
  const [state, globalUpdateView] = useReducer(switchView, {
    screen: ScreenId.MAIN_MENU,
    login: "",
  });

  useEffect(() => {
    console.log("App state: ", state);
  }, [state]);

  pMainMenu.injectGlobalUpdateView(globalUpdateView);
  pClientMainWindow.injectGlobalUpdateView(globalUpdateView);
  pCourierCompanyMainWindow.injectGlobalUpdateView(globalUpdateView);

  return (
    <div className="App">
      {VMainMenu(
        state.screen === ScreenId.MAIN_MENU,
        usShowClientMainWindow,
        usShowCourierCompanyMainWindow
      )}
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
    </div>
  );
}
