import { FindDishDTO } from "./Dish";

export enum ClientScreenId {
  DISHES = "DISHES",
  CART = "CART",
  MAIN_WINDOW = "MAIN_WINDOW",
}

export class ClientViewState {
  dishes: FindDishDTO[] = [];
  filters = new DishViewFilters();
  cart: unknown[] = [];
  screen: ClientScreenId = ClientScreenId.MAIN_WINDOW;
}

export class DishViewFilters {
  companyName = "";
  kitchenType = "";
  mealType = "";
}

export interface UpdateClientViewAction {
  type: "UPDATE_DISHES" | "CHANGE_FILTERS" | "UPDATE_CART" | "CHANGE_SCREEN",
  filters?: DishViewFilters;
  dishes?: FindDishDTO[];
  screen?: ClientScreenId;
}

