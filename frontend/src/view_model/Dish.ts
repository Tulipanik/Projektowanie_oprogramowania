export interface FindDishDTO {
  calories: number,
  companyName: string,
  dishId: number,
  ingredients: string[],
  kitchenType: string,
  mealType: string,
  name: string,
  photoLink: string,
  price: number,
}

export interface OrderDishDTO {
  date: Date,
  dish: FindDishDTO,
}