import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { DishViewFilters } from '../../../view_model/Client';


export function CClientDishes(ucsShowClientDishList: UCSShowClientDishList, ucsShowClientWindow: UCShowClientMainWindow, ucsShowClientCart: UCSShowClientCart) {

  function pressUpdateFiltersBtn(filters: DishViewFilters) {
    ucsShowClientDishList.handleUpdateFiltersBtnClick(filters)
  }

  function pressShowClientMainWindowBtn() {
    ucsShowClientWindow.showClientMainWindow();
  }

  function pressClearFiltersBtn() {
    ucsShowClientDishList.handleUpdateFiltersBtnClick(new DishViewFilters());
  }

  function pressAddToCartBtn(dishId: number) {
    ucsShowClientDishList.addDishToCart(dishId);
  }

  function pressShowClientCartBtn() {
    ucsShowClientCart.showClientCart()
  }

  return { pressUpdateFiltersBtn, pressShowClientMainWindowBtn, pressShowClientCartBtn, pressAddToCartBtn, pressClearFiltersBtn };
}
