import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { FindDishDTO, OrderDishDTO } from "../../../view_model/Dish";

export function CClientCart(
  ucsShowClientCart: UCSShowClientCart,
  ucsShowClientWindow: UCShowClientMainWindow,
  ucsShowClientDishList: UCSShowClientDishList,
  ucsClientPlaceOrder: UCSClientPlaceOrder
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

  function pressShowDishListBtn() {
    ucsShowClientDishList.showClientDishes();
  }

  return {
    pressShowClientMainWindowBtn,
    pressRemoveFromCartBtn,
    pressShowDishListBtn,
    setCartDishDate,
  };
}
