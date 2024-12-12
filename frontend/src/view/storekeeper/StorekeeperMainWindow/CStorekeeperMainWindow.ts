import {
    StorekeeperViewState,
    UpdateStorekeeperViewAction,
  } from "../../../view_model/Storekeeper";
  
  export function updateStorekeeperViewState(
    state: StorekeeperViewState,
    action: UpdateStorekeeperViewAction
  ) {
    let newState = { ...state };
    switch (action.type) {
      case "UPDATE_ORDER_LIST":
        newState.orderList = action.orderList!;
        break;
      case "CHANGE_SCREEN":
        newState.screen = action.screen!;
        break;
    }
    return newState;
  }
  