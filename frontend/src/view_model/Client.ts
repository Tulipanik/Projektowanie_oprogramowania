import { FindDishDTO, mealType, OrderDishDTO } from "./Dish";
import { SortingKey, sortingType } from "./Filtr";

export enum ClientScreenId {
  DISHES = "DISHES",
  CART = "CART",
  MAIN_WINDOW = "MAIN_WINDOW",
}


export class DishListSelectOptions {
  companies: string[] = [];
  kitchenTypes: string[] = [];
  mealTypes: mealType[] = [mealType.BREAKFAST, mealType.DINNER, mealType.SECOND_BREAKFAST, mealType.SUPPER, mealType.TEA, mealType.DESSERT];
  sortingTypes: sortingType[] = [sortingType.ASCEND, sortingType.DESCEND];
  sortingKeys: SortingKey[] = [SortingKey.COMPANY_NAME, SortingKey.KITCHEN_TYPE, SortingKey.MEAL_TYPE];


  updateOptionsFromDishList(dishes: FindDishDTO[]) {
    const companies = new Set(dishes.map(dish => dish.companyName));
    const kitchenTypes = new Set(dishes.map(dish => dish.kitchenType));
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
  selectOptions = new DishListSelectOptions();
}

export class DishViewFilters {
  companyName = "";
  kitchenType = "";
  mealType = "";
  sortingKey: SortingKey = SortingKey.KITCHEN_TYPE;
  sortingType: sortingType = sortingType.ASCEND;

  static isEmpty(filters: DishViewFilters): boolean {
    return filters.companyName === "" && filters.kitchenType === "" && filters.mealType === "" && filters.sortingKey === SortingKey.KITCHEN_TYPE && filters.sortingType === sortingType.ASCEND;
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

