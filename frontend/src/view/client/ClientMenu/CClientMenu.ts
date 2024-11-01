import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";


export function CClientMenu(ucshowClientMainWindow: UCShowClientMainWindow, ucsShowClientDishList: UCSShowClientDishList) {
  function pressShowDishListBtn() {
    ucsShowClientDishList.showClientDishes();
  }

  function pressCartBtn() {
    return;
  }

  function pressBackToMainWindowBtn() {
    ucshowClientMainWindow.backSelected();
  };

  return { pressShowDishListBtn, pressCartBtn, pressBackToMainWindowBtn };
}