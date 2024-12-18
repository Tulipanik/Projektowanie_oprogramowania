import { FindDishDTO, mealType, OrderDishDTO } from "./Dish";
import { SortingKey, sortingType } from "./Filtr";
import { orderDataDTO, orderDTO, orderStatus } from "./Order";

export enum ClientScreenId {
  DISHES = "DISHES",
  CART = "CART",
  MAIN_WINDOW = "MAIN_WINDOW",
  ADDRESS_FORM = "ADDRESS_FORM",
  PLACE_ORDER_SUCESS = "PLACE_ORDER_SUCESS",
  PLACE_ORDER_FAIL = "PLACE_ORDER_FAIL",
  ORDER_SUMMARY = "ORDER_SUMMARY",
  PAY_ORDER_SUCCESS = "PAY_ORDER_SUCCESS",
  PAY_ORDER_FAIL = "PAY_ORDER_FAIL",
  ORDERS = "ORDERS",
  ORDER_DETAILS = "ORDER_DETAILS",
}

export class DishListSelectOptions {
  companies: string[] = [];
  kitchenTypes: string[] = [];
  mealTypes: mealType[] = [
    mealType.BREAKFAST,
    mealType.DINNER,
    mealType.SECOND_BREAKFAST,
    mealType.SUPPER,
    mealType.TEA,
    mealType.DESSERT,
  ];
  sortingTypes: sortingType[] = [sortingType.ASCENDING, sortingType.DESCENDING];
  sortingKeys: SortingKey[] = [
    SortingKey.COMPANY_NAME,
    SortingKey.KITCHEN_TYPE,
    SortingKey.MEAL_TYPE,
  ];

  updateOptionsFromDishList(dishes: FindDishDTO[]) {
    const companies = new Set(dishes.map((dish) => dish.companyName));
    const kitchenTypes = new Set(dishes.map((dish) => dish.kitchenType));
    this.companies = Array.from(companies);
    this.kitchenTypes = Array.from(kitchenTypes);
  }
}

export class ClientViewState {
  dishes: FindDishDTO[] = [];
  filters = new DishViewFilters();
  cart: OrderDishDTO[] = [];
  screen: ClientScreenId = ClientScreenId.MAIN_WINDOW;
  error: string = "";
  order: orderDTO = {
    clientData: INITIAL_CLIENT_ORDER_DATA_VALUES,
    meals: [],
    orderDate: new Date(),
    orderId: 0,
    price: 0,
    status: orderStatus.PLACED,
  };
  orderList: orderDTO[] = [];
  orderDetails: orderDTO = null as any;
  selectOptions = new DishListSelectOptions();
}

export class DishViewFilters {
  companyName = "";
  kitchenType = "";
  mealType: mealType | string = "";
  sortingKey: SortingKey | string = "";
  sortingType: sortingType = sortingType.ASCENDING;

  static isEmpty(filters: DishViewFilters): boolean {
    return (
      filters.companyName === "" &&
      filters.kitchenType === "" &&
      filters.mealType === "" &&
      filters.sortingKey === "" &&
      filters.sortingType === sortingType.ASCENDING
    );
  }
}

export const INITIAL_CLIENT_ORDER_DATA_VALUES: orderDataDTO = {
  city: "",
  clientId: 1, //TODO: przypisywac wartosc zalogowanego klienta
  comment: "",
  email: "",
  name: "",
  phone: "",
  street: "",
  surname: "",
  zipCode: "",
};

export interface UpdateClientViewAction {
  type:
    | "UPDATE_DISHES"
    | "UPDATE_ORDER_LIST"
    | "CHANGE_FILTERS"
    | "UPDATE_CART"
    | "CHANGE_SCREEN"
    | "UPDATE_CART_DISH_DATE"
    | "SET_ERROR_MESSAGE"
    | "UPDATE_ORDER"
    | "UPDATE_ORDER_DETAILS";
  filters?: DishViewFilters;
  dishes?: FindDishDTO[];
  screen?: ClientScreenId;
  cart?: OrderDishDTO[];
  dish?: OrderDishDTO;
  message?: string;
  order?: orderDTO;
  orderList?: orderDTO[];
  orderDetails?: orderDTO;
}
