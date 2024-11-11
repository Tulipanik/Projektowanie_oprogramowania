import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { FindDishDTO, OrderDishDTO } from "../../../view_model/Dish";

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

	function setCartDishDate(dish: FindDishDTO, date: Date) {
		ucsShowClientCart.updateCartDishDate(dish, date);
	}

	function pressOrderBtn(cart: OrderDishDTO[]) {
		if (cart.find((item) => item.date === null)) {
			ucsShowClientCart.setErrorMassage(
				"All dishes must have delivery dates set!"
			);
		} else {
			ucsShowClientCart.setErrorMassage("");
			return; //TODO obsługa zamówienia (uc50)
		}
	}

	function pressShowDishListBtn() {
		ucsShowClientDishList.showClientDishes();
	}

	return {
		pressShowClientMainWindowBtn,
		pressRemoveFromCartBtn,
		pressOrderBtn,
		pressShowDishListBtn,
		setCartDishDate,
	};
}
