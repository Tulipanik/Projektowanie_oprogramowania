import {
  CateringCompanyViewState,
  UpdateCateringCompanyViewAction,
} from "../../../view_model/CateringCompany";

export function updateCateringCompanyViewState(
  state: CateringCompanyViewState,
  action: UpdateCateringCompanyViewAction
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
