import { FindDishDTO, OrderDishDTO } from "./Dish";

export enum ClientScreenId {
  DISHES = "DISHES",
  CART = "CART",
  MAIN_WINDOW = "MAIN_WINDOW",
}

export class ClientViewState {
  dishes: FindDishDTO[] = [];
  filters = new DishViewFilters();
  cart: OrderDishDTO[] = [];
  screen: ClientScreenId = ClientScreenId.MAIN_WINDOW;
}

export class DishViewFilters {
  companyName = "";
  kitchenType = "";
  mealType = "";

  static isEmpty(filters: DishViewFilters): boolean {
    return filters.companyName === "" && filters.kitchenType === "" && filters.mealType === "";
  }
}

export interface UpdateClientViewAction {
  type: "UPDATE_DISHES" | "CHANGE_FILTERS" | "UPDATE_CART" | "CHANGE_SCREEN",
  filters?: DishViewFilters;
  dishes?: FindDishDTO[];
  screen?: ClientScreenId;
  cart?: OrderDishDTO[];
}

