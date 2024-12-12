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
    ucsShowClientWindow.handleShowClientMainWindowBtnClick();
  }

  function pressRemoveFromCartBtn(dishId: number, id: number) {
    ucsShowClientCart.handleRemoveDishFromCartBtnClick(dishId, id);
  }

  function setCartDishDate(dish: FindDishDTO, date: Date) {
    ucsShowClientCart.handleUpdateCartDishDateInput(dish, date);
  }

  function pressShowDishListBtn() {
    ucsShowClientDishList.handleShowClientDishesBtnClick();
  }

  return {
    pressShowClientMainWindowBtn,
    pressRemoveFromCartBtn,
    pressShowDishListBtn,
    setCartDishDate,
  };
}
