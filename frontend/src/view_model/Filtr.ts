import { mealType } from "./Dish";

export interface filtrDTO {
  companyName?: compoanyFiltrDTO;
  kitchenType?: kitchenFiltrDTO;
  mealType?: mealFiltrDTO;
  sortingKey?: SortingKey;
  sorting?: sortingType;
}

export enum sortingType {
  DESCENDING = "DESCENDING",
  ASCENDING = "ASCENDING",
}

export enum SortingKey {
  COMPANY_NAME = "COMPANY_NAME",
  KITCHEN_TYPE = "KITCHEN_TYPE",
  MEAL_TYPE = "MEAL_TYPE",
}

export interface compoanyFiltrDTO {
  values: string[];
}

export interface kitchenFiltrDTO {
  values: string[];
}

export interface mealFiltrDTO {
  values: mealType[];
}
