import {
  CourierCompanyViewState,
  UpdateCourierCompanyViewAction,
} from "../../../view_model/CourierCompany";

export function updateCourierCompanyViewState(
  state: CourierCompanyViewState,
  action: UpdateCourierCompanyViewAction
) {
  let newState = { ...state };
  switch (action.type) {
    case "CHANGE_SCREEN":
      newState.screen = action.screen!;
      break;
    case "UPDATE_OFFER":
      newState.offer = action.offer!;
      break;
  }
  return newState;
}
