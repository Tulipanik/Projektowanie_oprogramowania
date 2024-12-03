import { MOCK_FIND_DISH_DTO } from "../mock/findDishDto.mock";
import { AddDishDTO, FindDishDTO } from "../view_model/Dish";
import { filtrDTO } from "../view_model/Filtr";
import { AuthorizationConst } from "./AuthorizationConst";

export interface IDishesApi {
  addNewDish(dish: AddDishDTO): Promise<boolean>;
  getDishList(
    clientId: number,
    filtrObject: filtrDTO | null
  ): Promise<FindDishDTO[]>;
}

export class DishesProxy implements IDishesApi {
  async addNewDish(dish: AddDishDTO): Promise<boolean> {
    const url = "http://localhost:8080/api/v1/dish/add";

    const formData = new FormData();

    for (const [key, value] of Object.entries(dish)) {
      formData.append(key, value);
    }

    try {
      let response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${AuthorizationConst.token}`,
        },
        body: formData,
      });

      return response.json();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getDishList(
    clientId: number,
    filtrObject: filtrDTO | null
  ): Promise<FindDishDTO[]> {
    const url = `http://localhost:8080/api/v1/dish/client/1`;

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${AuthorizationConst.token}`,
      },
    };
    if (filtrObject) {
      requestOptions.body = JSON.stringify(filtrObject);
    }
    let response = await fetch(url, requestOptions);
    if (response.status === 200) {
      return response.json();
    } else {
      return [];
    }

    // return new Promise((resolve, reject) => {
    //   resolve(MOCK_FIND_DISH_DTO);
    // });
  }
}
