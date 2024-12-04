import { CourierViewState, UpdateCourierViewAction } from "../../../view_model/Courier";

export function updateCourierViewState(
  state: CourierViewState,
  action: UpdateCourierViewAction
) {
  let newState = { ...state };
  switch (action.type) {
    case "CHANGE_SCREEN":
      newState.screenId = action.screen!;
      break;
    case "UPDATE_ORDERS":
      newState.orders = action.orders!;
      break;
    default:
      console.error("Unknown action type: ", action);
      break;
  }
  return newState;
}