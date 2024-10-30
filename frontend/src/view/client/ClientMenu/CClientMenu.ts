import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { PClientMainWindow } from "../ClientMainWindow/PClientMainWindow";


export function CClientMenu(pClientMainWindow: PClientMainWindow, ucsShowClientDishList: UCSShowClientDishList) {
  function showClientDishes() {
    ucsShowClientDishList.showClientDishes();
  }

  function showClientCart() {
    return;
  }

  function backToMainWindow() {
    pClientMainWindow.showMainWindow();
  };

  return { showClientDishes, showClientCart, backToMainWindow };
}