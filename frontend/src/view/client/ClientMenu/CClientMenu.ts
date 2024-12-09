import { UCShowClientOrderList } from "./../../../use_cases/UCSShowClientOrderList";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";

export function CClientMenu(
  ucshowClientMainWindow: UCShowClientMainWindow,
  ucsShowClientDishList: UCSShowClientDishList,
  ucsShowClientCart: UCSShowClientCart,
  ucsShowClientOrderList: UCShowClientOrderList
) {
  function pressShowDishListBtn() {
    ucsShowClientDishList.handleShowClientDishesBtnClick();
  }

  function pressShowCartBtn() {
    ucsShowClientCart.handleShowClientCartBtnClick();
  }

  function pressShowOrderListBtn() {
    ucsShowClientOrderList.showClientOrderList();
  }

  function pressBackToMainWindowBtn() {
    ucshowClientMainWindow.handleBackSelectedBtnClick();
  }

  return {
    pressShowDishListBtn,
    pressShowCartBtn,
    pressBackToMainWindowBtn,
    pressShowOrderListBtn,
  };
}
