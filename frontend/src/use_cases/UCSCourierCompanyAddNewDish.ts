import { IDishesApi } from "../services/IDishes";
import { PCourierCompanyDishes } from "../view/courier_company/CourierCompanyDishes/PCourierCompanyDishes";
import { AddDishDTO } from "../view_model/Dish";

const MOCK_CLIENT_ID = 1;

export class UCCourierCompanyAddNewDish {
  constructor(
    private pCourierCompanyDishes: PCourierCompanyDishes,
    private dishesApi: IDishesApi
  ) { }

  showCourierCompanyAddDishWindow() {
    this.pCourierCompanyDishes.showAddDishWindow();
  }

  async showCourierCompanyDishesList() {
    return await this.dishesApi
      .getDishList(MOCK_CLIENT_ID, null)
      .then((offer) => {
        this.pCourierCompanyDishes.showDishList(offer);
      });
  }

  async addDishToOffer(newDish: AddDishDTO) {
    return await this.dishesApi.addNewDish(newDish).then((boolean) => {
      if (boolean) {
        this.pCourierCompanyDishes.showDishAddedWindow();
      } else {
        this.pCourierCompanyDishes.showDishNotAddedWindow();
      }
    });
  }
}
