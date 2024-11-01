import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { DishViewFilters } from '../../../view_model/Client';
import { FindDishDTO } from "../../../view_model/Dish";



export function CClientDishes(ucsShowClientDishList: UCSShowClientDishList, ucsShowClientWindow: UCShowClientMainWindow,) {

  function updateFilters(filters: DishViewFilters) {
    ucsShowClientDishList.updateFilters(filters)
  }

  function showClientMainWindow() {
    ucsShowClientWindow.showClientMainWindow();
  }

  function clearFilters() {
    ucsShowClientDishList.updateFilters(new DishViewFilters());
  }
  //todo
  function addToCart(dish: FindDishDTO) {
    return;
  }

  //TODO obgługa koszyka
  function showClientCart() {
    return;
  }

  return { updateFilters, showClientMainWindow, showClientCart, addToCart, clearFilters };
}
