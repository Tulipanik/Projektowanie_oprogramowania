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
  addNewDish(dish: AddDishDTO): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
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
