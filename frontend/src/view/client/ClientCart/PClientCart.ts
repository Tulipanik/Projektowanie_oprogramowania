import { ClientScreenId } from "../../../view_model/Client";
import { OrderDishDTO } from "../../../view_model/Dish";
import { ClientPresentationDispatcher } from "../ClientPresentationDispatcher";

export class PClientCart extends ClientPresentationDispatcher {
	showCart(dishList: OrderDishDTO[]) {
		this.clientDispatch?.({ type: "UPDATE_CART", cart: dishList });
		this.clientDispatch?.({
			type: "CHANGE_SCREEN",
			screen: ClientScreenId.CART,
		});
	}

	removeDishFromCart(dishList: OrderDishDTO[]) {
		this.clientDispatch?.({ type: "UPDATE_CART", cart: dishList });
	}

	showClientMainWindow() {}
}
