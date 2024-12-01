import { MOCK_FIND_DISH_DTO } from "../mock/findDishDto.mock";
import { AddDishDTO, FindDishDTO } from "../view_model/Dish";
import { filtrDTO } from "../view_model/Filtr";

export interface IDishesApi {
  addNewDish(dish: AddDishDTO): Promise<boolean>;
  getDishList(
    clientId: number,
    filtrObject: filtrDTO[]
  ): Promise<FindDishDTO[]>;
}

export class DishesProxy implements IDishesApi {
  async addNewDish(dish: AddDishDTO): Promise<boolean> {
    const url = "http://localhost:8080/api/v1/cart/add";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "*/*",
        },
        body: JSON.stringify(dish),
      });

      return response.json();
    } catch (error) {
      return new Promise((resolve, reject) => {
        resolve(false);
      });
    }
  }

  getDishList(
    clientId: number,
    filtrObject: filtrDTO[]
  ): Promise<FindDishDTO[]> {
    return new Promise((resolve, reject) => {
      resolve(MOCK_FIND_DISH_DTO);
    });
  }
}
