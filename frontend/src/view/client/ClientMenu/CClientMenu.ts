import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";


export function CClientMenu(ucshowClientMainWindow: UCShowClientMainWindow, ucsShowClientDishList: UCSShowClientDishList, ucsShowClientCart: UCSShowClientCart) {
  function pressShowDishListBtn() {
    ucsShowClientDishList.handleShowClientDishesBtnClick();
  }

  function pressShowCartBtn() {
    ucsShowClientCart.showClientCart();
  }

  function pressBackToMainWindowBtn() {
    ucshowClientMainWindow.handleBackSelectedBtnClick();
  };

  return { pressShowDishListBtn, pressShowCartBtn, pressBackToMainWindowBtn };
}