import { useReducer } from "react";
import { DishesProxy, IDishesApi } from "../../../services/IDishes";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { ClientScreenId, ClientViewState } from "../../../view_model/Client";
import { PClientDishes } from "../ClientDishes/PClientDishes";
import { VClientMenu } from "../ClientMenu/VClientMenu";
import { updateClientViewState } from "./CClientMainWindow";
import { PClientMainWindow } from "./PClientMainWindow";
import { VClientDishes } from "../ClientDishes/VClientDishes";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { CartProxy, ICartApi } from "../../../services/ICart";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { PClientCart } from "../ClientCart/PClientCart";
import { VClientCart } from "../ClientCart/VClientCart";
import { VClientPlaceOrder } from "../ClientPlaceOrder/VClientPlaceOrder";
import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { PClientPlaceOrder } from "../ClientPlaceOrder/PClientPlaceOrder";

const pClientDishes = new PClientDishes();
const pClientCart = new PClientCart();
const pClientPlaceOrder = new PClientPlaceOrder();
const iDishes: IDishesApi = new DishesProxy();
const iCart: ICartApi = new CartProxy();
const ucsShowClientDishList = new UCSShowClientDishList(
	pClientDishes,
	iDishes,
	iCart
);
const ucsShowClientCart = new UCSShowClientCart(pClientCart, iCart);
const ucsClientPlaceOrder = new UCSClientPlaceOrder(pClientPlaceOrder);

export function VClientMainWindow(
	isActive: boolean,
	ucshowClientMainWindow: UCShowClientMainWindow,
	pClientMainWindow: PClientMainWindow
) {
	const [clientState, clientStateUpdate] = useReducer(
		updateClientViewState,
		new ClientViewState()
	);

	if (!isActive) return;

	pClientDishes.injectClientDispatch(clientStateUpdate);
	pClientCart.injectClientDispatch(clientStateUpdate);
	pClientMainWindow.injectClientDispatch(clientStateUpdate);
	pClientPlaceOrder.injectClientDispatch(clientStateUpdate);

	return (
		<div>
			{VClientMenu(
				clientState.screen === ClientScreenId.MAIN_WINDOW,
				ucshowClientMainWindow,
				ucsShowClientDishList,
				ucsShowClientCart
			)}
			{VClientDishes(
				clientState.screen === ClientScreenId.DISHES,
				ucsShowClientDishList,
				ucshowClientMainWindow,
				ucsShowClientCart,
				{ dishes: clientState.dishes, filters: clientState.filters }
			)}
			{VClientCart(
				clientState.screen === ClientScreenId.CART,
				ucsShowClientCart,
				ucshowClientMainWindow,
				ucsShowClientDishList,
				ucsClientPlaceOrder,
				{ cart: clientState.cart, error: clientState.error }
			)}
			{VClientPlaceOrder(
				clientState.screen === ClientScreenId.PLACE_ORDER,
				ucsShowClientCart,
				ucsClientPlaceOrder,
				{ address: clientState.address}
			)}
		</div>
	);
}
