import { Dispatch } from "react";
import { ActionId, MenuState } from "../view_model/Types";
import { UCShowClientList } from "../use_cases/UCShowClientList";

export function updateMmView(state: MenuState, action: ActionId) {
  let newState = { ...state };
  switch (action) {
    case ActionId.ADD:
      break;
  }
  return newState;
}

export function CMainMenu(show: UCShowClientList) {
  function showClientListSelected() {
    show.showClientListSelected();
  }

  return [showClientListSelected];
}
