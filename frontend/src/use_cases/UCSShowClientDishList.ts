import { PClientDishes } from "../view/client/ClientDishes/PClientDishes";
import { DishViewFilters } from "../view_model/Client";
import { IDishesApi } from './../services/IDishes';


export class UCSShowClientDishList {

  constructor(
    private pClientDishes: PClientDishes,
    private dishesApi: IDishesApi) {
  }

  async showClientDishes(): Promise<void> {
    return await this.dishesApi.getDishList(1, []).then((dishes) => {
      this.pClientDishes.showClientDishes(dishes);
    })
  }

  async updateFilters(filters: DishViewFilters): Promise<void> {
    this.pClientDishes.updateFilters(filters);
    return await this.dishesApi.getDishList(1, []).then((dishes) => {
      this.pClientDishes.showClientDishes(dishes);
    })
  }

  showClientMainWindow() {
    this.pClientDishes.showClientMainWindow()
  }

}