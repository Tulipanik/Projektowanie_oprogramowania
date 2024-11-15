import { ClientScreenId, DishViewFilters } from "../../../view_model/Client";
import { FindDishDTO, OrderDishDTO } from "../../../view_model/Dish";
import { ClientPresentationDispatcher } from "../ClientPresentationDispatcher";


export class PClientDishes extends ClientPresentationDispatcher {


  updateFilters(filters: DishViewFilters) {
    this.clientDispatch?.({ type: "CHANGE_FILTERS", filters: filters });
  }

  showDishList(dishList: FindDishDTO[]) {
    this.clientDispatch?.({ type: "UPDATE_DISHES", dishes: dishList });
    this.clientDispatch?.({ type: "CHANGE_SCREEN", screen: ClientScreenId.DISHES });
  }

  addDishToCart(dishList: OrderDishDTO[]) {
    this.clientDispatch?.({type: "UPDATE_CART", cart: dishList})
  }

  showClientMainWindow() {
  }

}
