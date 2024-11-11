import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";

export function CClientCart(
	ucsShowClientCart: UCSShowClientCart,
	ucsShowClientWindow: UCShowClientMainWindow,
	ucsShowClientDishList: UCSShowClientDishList
) {
	function pressShowClientMainWindowBtn() {
		ucsShowClientWindow.showClientMainWindow();
	}

	function pressRemoveFromCartBtn(dishId: number) {
		ucsShowClientCart.removeDishFromCart(dishId);
	}

	function pressOrderBtn() {
		return; //TODO obsługa zamówienia (uc50)
	}

	function pressShowDishListBtn() {
		ucsShowClientDishList.showClientDishes();
	}

	return {
		pressShowClientMainWindowBtn,
		pressRemoveFromCartBtn,
		pressOrderBtn,
		pressShowDishListBtn,
	};
}
