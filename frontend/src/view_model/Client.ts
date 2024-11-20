import { FindDishDTO, OrderDishDTO } from "./Dish";
import { orderDataDTO } from "./Order";

export enum ClientScreenId {
  DISHES = "DISHES",
  CART = "CART",
  MAIN_WINDOW = "MAIN_WINDOW",
  ADDRESS_FORM = "ADDRESS_FORM",
  PLACE_ORDER_SUCESS = "PLACE_ORDER_SUCESS",
  PLACE_ORDER_FAIL ='PLACE_ORDER_FAIL',
  ORDER_SUMMARY = 'ORDER_SUMMARY'
}

export class ClientViewState {
  dishes: FindDishDTO[] = [];
  filters = new DishViewFilters();
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

export const INITIAL_CLIENT_ORDER_DATA_VALUES: orderDataDTO = {
  city: '',
  clientId: 1, //TODO: przypisywac wartosc zalogowanego klienta
  comment: '',
  email: '',
  name: '',
  phone: '',
  street: '',
  surname: '',
  zipCode: '',
};

export interface UpdateClientViewAction {
  type: "UPDATE_DISHES" | "CHANGE_FILTERS" | "UPDATE_CART" | "CHANGE_SCREEN" | "UPDATE_CART_DISH_DATE" | "SET_ERROR_MESSAGE",
  filters?: DishViewFilters;
  dishes?: FindDishDTO[];
  screen?: ClientScreenId;
  cart?: OrderDishDTO[];
  dish?: OrderDishDTO;
  message?: string;
}

