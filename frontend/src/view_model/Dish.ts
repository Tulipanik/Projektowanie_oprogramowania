export interface FindDishDTO {
  calories: number;
  companyName: string;
  dishId: number;
  ingredients: string[];
  kitchenType: string;
  mealType: string;
  name: string;
  photoLink: string;
  price: number;
}

export interface OrderDishDTO {
  date: Date | null;
  dish: FindDishDTO;
}

export enum mealType {
  BREAKFAST = "BREAKFAST",
  SUPPER = "SUPPER",
  DINNER = "DINNER",
  SECOND_BREAKFAST = "SECOND_BREAKFAST",
  TEA = "TEA",
  DESSERT = "DESSERT",
}

export interface AddDishDTO {
  calories: number;
  cateringCompanyId: number;
  ingredients: string[];
  kitchenType: string;
  mealType: mealType;
  name: string;
  photo?: File;
  price: number;
}
