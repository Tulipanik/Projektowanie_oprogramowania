import { mealType } from "./Dish";

export interface filtrDTO {
  companyName?: compoanyFiltrDTO;
  kitchenType?: kitchenFiltrDTO;
  mealType?: mealFiltrDTO;
}

enum sortingType {
  DESCEND = 1,
  ASCEND = 0,
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
