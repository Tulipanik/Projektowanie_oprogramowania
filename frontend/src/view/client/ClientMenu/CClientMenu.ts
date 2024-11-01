import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";


export function CClientMenu(ucshowClientMainWindow: UCShowClientMainWindow, ucsShowClientDishList: UCSShowClientDishList) {
  function showClientDishes() {
    ucsShowClientDishList.showClientDishes();
  }

  function showClientCart() {
    return;
  }

  function backToMainWindow() {
    ucshowClientMainWindow.backSelected();
  };

  return { showClientDishes, showClientCart, backToMainWindow };
}