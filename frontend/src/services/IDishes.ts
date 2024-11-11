import { MOCK_FIND_DISH_DTO } from "../mock/findDishDto.mock";
import { FindDishDTO } from "../view_model/Dish";

export interface IDishesApi {
  addNewDish(dish: unknown): Promise<unknown>;
  getDishList(clientId: number, filtrList: unknown[]): Promise<FindDishDTO[]>
}

export class DishesProxy implements IDishesApi {

  addNewDish(dish: unknown): Promise<unknown> {
    throw new Error("Method not implemented.");
  }

  getDishList(clientId: number, filtrList: unknown[]): Promise<FindDishDTO[]> {
    return new Promise((resolve, reject) => { resolve(MOCK_FIND_DISH_DTO) })
  }

}