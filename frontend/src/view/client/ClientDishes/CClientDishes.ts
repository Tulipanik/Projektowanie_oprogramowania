import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { DishViewFilters } from '../../../view_model/Client';
import { FindDishDTO } from "../../../view_model/Dish";



export function CClientDishes(ucsShowClientDishList: UCSShowClientDishList, ucsShowClientWindow: UCShowClientMainWindow,) {

  function pressUpdateFiltersBtn(filters: DishViewFilters) {
    ucsShowClientDishList.updateFilters(filters)
  }

  function pressShowClientMainWindowBtn() {
    ucsShowClientWindow.showClientMainWindow();
  }

  function pressClearFiltersBtn() {
    ucsShowClientDishList.updateFilters(new DishViewFilters());
  }
  //todo
  function pressAddToCartBtn(dish: FindDishDTO) {
    return;
  }

  //TODO obgługa koszyka
  function pressShowClientCartBtn() {
    return;
  }

  return { pressUpdateFiltersBtn, pressShowClientMainWindowBtn, pressShowClientCartBtn, pressAddToCartBtn, pressClearFiltersBtn };
}
