import { FindDishDTO, OrderDishDTO } from "./Dish";

export enum ClientScreenId {
  DISHES = "DISHES",
  CART = "CART",
  MAIN_WINDOW = "MAIN_WINDOW",
  PLACE_ORDER = "PLACE_ORDER",
}

export class ClientViewState {
  dishes: FindDishDTO[] = [];
  filters = new DishViewFilters();
  address = new AddressFormFields();
  cart: OrderDishDTO[] = [];
  screen: ClientScreenId = ClientScreenId.MAIN_WINDOW;
  error: string = "";
}

export class DishViewFilters {
  companyName = "";
  kitchenType = "";
  mealType = "";

  static isEmpty(filters: DishViewFilters): boolean {
    return filters.companyName === "" && filters.kitchenType === "" && filters.mealType === "";
  }
}

export class AddressFormFields {
  firstName= "";
  lastName= "";
  phone= "";
  email= "";
  postalCode= "";
  city= "";
  address= "";
  courierNotes= "";

  static isEmpty(filters: AddressFormFields): boolean {
    return filters.firstName === "" && filters.lastName === "" && filters.phone === "" && filters.email === "" 
    && filters.postalCode === ""
    && filters.city === "" && filters.address === "" && filters.courierNotes === "";
  }
}

export interface UpdateClientViewAction {
  type: "UPDATE_DISHES" | "CHANGE_FILTERS" | "UPDATE_CART" | "CHANGE_SCREEN" | "UPDATE_CART_DISH_DATE" | "SET_ERROR_MESSAGE",
  filters?: DishViewFilters;
  dishes?: FindDishDTO[];
  screen?: ClientScreenId;
  cart?: OrderDishDTO[];
  dish?: OrderDishDTO;
  message?: string;
}

