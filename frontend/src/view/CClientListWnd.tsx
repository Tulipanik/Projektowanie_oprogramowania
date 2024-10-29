import { Dispatch } from "react";
import {
  ActionId,
  ScreenId,
  ClientListWndData,
  Client
} from "../view_model/Types";
import { UCShowClientList } from "../use_cases/UCShowClientList";

export function updateClwView(state: ClientListWndData, action: ActionId) {
  let newState = { ...state };
  switch (action) {
    case ActionId.ADD:
      break;
  }
  return newState;
}

export function CClientListWnd(
  state: ClientListWndData,
  ucSCL: UCShowClientList
) {
  function backSelected() {
    ucSCL.backSelected();
  }
  function addSelected() {
    let nc: Client = Object.create(state.new_client);
    state.new_client = new Client();
    ucSCL.addSelected(nc);
  }
  return [backSelected, addSelected];
}
