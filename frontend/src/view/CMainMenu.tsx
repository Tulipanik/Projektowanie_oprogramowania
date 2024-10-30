import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { ActionId, MenuState } from "../view_model/Types";

export function updateMmView(state: MenuState, action: ActionId) {
  let newState = { ...state };
  switch (action) {
    case ActionId.ADD:
      break;
  }
  return newState;
}

export function CMainMenu(ucsShowClientMainWindow: UCShowClientMainWindow) {
  function showClientMainWindow() {
    ucsShowClientMainWindow.showClientListSelected()
  }

  return { showClientMainWindow };
}
