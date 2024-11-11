import {
	ClientViewState,
	UpdateClientViewAction,
} from "../../../view_model/Client";

export function updateClientViewState(
	state: ClientViewState,
	action: UpdateClientViewAction
) {
	let newState = { ...state };
	switch (action.type) {
		case "UPDATE_DISHES":
			newState.dishes = action.dishes!;
			break;
		case "CHANGE_FILTERS":
			newState.filters = { ...newState.filters, ...action.filters };
			break;
		case "UPDATE_CART":
			newState.cart = action.cart!;
			break;
		case "CHANGE_SCREEN":
			newState.screen = action.screen!;
			break;
	}
	return newState;
}
