import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";


export function CClientMenu(ucshowClientMainWindow: UCShowClientMainWindow, ucsShowClientDishList: UCSShowClientDishList, ucsShowClientCart: UCSShowClientCart) {
  function pressShowDishListBtn() {
    ucsShowClientDishList.showClientDishes();
  }

  function pressShowCartBtn() {
    ucsShowClientCart.showClientCart();
  }

  function pressBackToMainWindowBtn() {
    ucshowClientMainWindow.backSelected();
  };

  return { pressShowDishListBtn, pressShowCartBtn, pressBackToMainWindowBtn };
}