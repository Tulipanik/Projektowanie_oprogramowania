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
  BREAKFAST = "Breakfast",
  SUPPER = "Supper",
  DINNER = "Dinner",
  SECOND_BREAKFAST = "Second Breakfast",
  TEA = "Tea",
  DESSERT = "Dessert",
}

export interface AddDishDTO {
  calories: number;
  cateringCompanyId: number;
  ingredients: string[];
  kitchenType: string;
  mealType: mealType;
  name: string;
  photo: string; // TODO: change to BinaryData
  price: number;
}
