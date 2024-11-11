import { MOCK_FIND_DISH_DTO } from "../mock/findDishDto.mock";
import { OrderDishDTO } from "../view_model/Dish";

export interface ICartApi {
  tempCart: OrderDishDTO[];
  addDishToCart(cartId: number, dishId: number): Promise<OrderDishDTO[]>;
  removeDishFromCart(cartId: number, dishId: number): Promise<OrderDishDTO[]>;
  getCart(clientId: number, filtrList: unknown[]): Promise<OrderDishDTO[]>
}

export class CartProxy implements ICartApi {
  tempCart: OrderDishDTO[] = [];  //TODO wywalić i brać z backendu

  addDishToCart(cartId: number, dishId: number): Promise<OrderDishDTO[]> {
    let dishToAdd = MOCK_FIND_DISH_DTO.filter((dish)=> dish.dishId === dishId)[0]
    if (!this.tempCart.find((item) => item.dish.dishId === dishToAdd.dishId)) {
      this.tempCart.push({
        dish: dishToAdd, 
        date: new Date()
      });
    }
    return new Promise((resolve, reject) => { resolve(this.tempCart) })
  }
  
	removeDishFromCart(cartId: number, dishId: number): Promise<OrderDishDTO[]> {
    this.tempCart = this.tempCart.filter((item)=> item.dish.dishId !== dishId);
    return new Promise((resolve, reject)=> { resolve(this.tempCart) });
  }
  
  getCart(cartId: number): Promise<OrderDishDTO[]> {
    return new Promise((resolve, reject) => { resolve(this.tempCart) })
  }

}