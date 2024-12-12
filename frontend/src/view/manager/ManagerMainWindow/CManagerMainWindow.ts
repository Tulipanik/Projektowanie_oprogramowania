import {
	ManagerAppState,
	UpdateManagerStateAction,
} from "../../../view_model/Manager";

export function updateManagerViewState(
	state: ManagerAppState,
	action: UpdateManagerStateAction
) {
	let newState = { ...state };
	switch (action.type) {
		case "CHANGE_SCREEN":
			newState.screen = action.screen!;
			break;
		case "UPDATE_COMPANY_TYPE":
			newState.companyType = action.companyType!;
			break;
	}
	return newState;
}
