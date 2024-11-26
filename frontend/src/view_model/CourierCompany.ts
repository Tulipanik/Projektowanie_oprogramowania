import { AddDishDTO, mealType } from "./Dish";

export enum CourierCompanyScreenId {
  MAIN_WINDOW = "MAIN_WINDOW",
  OFFER = "OFFER",
  ADD_DISH = "ADD_DISH",
  ADD_DISH_SUCCESS = "ADD_DISH_SUCCESS",
  ADD_DISH_FAIL = "ADD_DISH_FAIL",
}

export const INITIAL_COURIER_COMPANY_ADD_DISH_VALUES: AddDishDTO = {
  calories: 0,
  cateringCompanyId: 0,
  ingredients: [],
  kitchenType: "",
  mealType: mealType.BREAKFAST,
  name: "",
  price: 0,
};

export class CourierCompanyViewState {
  screen: CourierCompanyScreenId = CourierCompanyScreenId.MAIN_WINDOW;
  offer: any[] = [];
}

export interface UpdateCourierCompanyViewAction {
  type: "CHANGE_SCREEN" | "UPDATE_OFFER";
  screen?: CourierCompanyScreenId;
  offer?: any[];
}
