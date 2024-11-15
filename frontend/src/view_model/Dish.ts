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
  DINNER = "Dinner",
  SUPPER = "Supper",
  DESSERT = "Dessert",
  BRUNCH = "Brunch",
  SECOND_BREAKFAST = "Second Breakfast",
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