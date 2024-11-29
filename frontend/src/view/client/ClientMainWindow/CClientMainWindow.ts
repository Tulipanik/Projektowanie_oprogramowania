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
			if (newState.selectOptions.companies.length === 0) {
				newState.selectOptions.updateOptionsFromDishList(newState.dishes);
			}
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
		case "UPDATE_CART_DISH_DATE":
			newState.cart = newState.cart.filter(
				(item) => item.dish.dishId !== action.dish?.dish.dishId
			);
			if (action.dish) {
				newState.cart = [...newState.cart, action.dish];
			}
			if (newState.cart.find((item) => item.date === null)) {
				newState.error = "All dishes must have delivery dates set!";
			} else {
				newState.error = "";
			}
			break;
		case "SET_ERROR_MESSAGE":
			newState.error = action.message!;
			break;
	}
	return newState;
}
