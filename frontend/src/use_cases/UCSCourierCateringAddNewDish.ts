import { IDishesApi } from "../services/IDishes";
import { PCateringCompanyAddDish } from "../view/catering_company/CateringCompanyAddDish/PCateringCompanyAddDish";
import { PCateringCompanyDishes } from "../view/catering_company/CateringCompanyDishes/PCateringCompanyDishes";
import { AddDishDTO } from "../view_model/Dish";

const MOCK_CLIENT_ID = 1;

export class UCCateringCompanyAddNewDish {
  constructor(
    private pCateringCompanyDishes: PCateringCompanyDishes,
    private pCateringCompanyAddDish: PCateringCompanyAddDish,
    private dishesApi: IDishesApi
  ) {}

  showCateringCompanyAddDishWindow() {
    this.pCateringCompanyDishes.showAddDishWindow();
  }

  async showCateringCompanyDishesList() {
    return await this.dishesApi
      .getDishList(MOCK_CLIENT_ID, null)
      .then((offer) => {
        this.pCateringCompanyDishes.showDishList(offer);
      });
  }

  async addDishToOffer(newDish: AddDishDTO) {
    return await this.dishesApi.addNewDish(newDish).then((boolean) => {
      if (boolean) {
        this.pCateringCompanyAddDish.showDishAddedWindow();
      } else {
        this.pCateringCompanyAddDish.showDishNotAddedWindow();
      }
    });
  }
}
