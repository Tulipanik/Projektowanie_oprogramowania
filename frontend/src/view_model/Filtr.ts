import { mealType } from "./Dish";

export interface filtrDTO {
  companyName?: compoanyFiltrDTO;
  kitchenType?: kitchenFiltrDTO;
  mealType?: mealFiltrDTO;
}

export enum sortingType {
  DESCEND = "DESCEND",
  ASCEND = "ASCEND",
}

export enum SortingKey {
  COMPANY_NAME = "COMPANY_NAME",
  KITCHEN_TYPE = "KITCHEN_TYPE",
  MEAL_TYPE = "MEAL_TYPE",
}

export interface compoanyFiltrDTO {
  sorting: sortingType;
  values: string[];
}

export interface kitchenFiltrDTO {
  sorting: sortingType;
  values: string[];
}

export interface mealFiltrDTO {
  sorting: sortingType;
  values: mealType[];
}
