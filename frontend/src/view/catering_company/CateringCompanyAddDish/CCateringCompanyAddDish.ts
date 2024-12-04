import { UCCateringCompanyAddNewDish } from "../../../use_cases/UCSCourierCateringAddNewDish";
import { AddDishDTO } from "../../../view_model/Dish";

export function CCateringCompanyAddDish(
  ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish
) {
  function pressAddNewDishBtn(dish: AddDishDTO) {
    const newDish: AddDishDTO = {
      ...dish,
      cateringCompanyId: 1,
    };
    ucsCateringCompanyAddNewDish.addDishToOffer(newDish);
  }

  function pressShowDishListBtn() {
    ucsCateringCompanyAddNewDish.showCateringCompanyDishesList();
  }

  return {
    pressAddNewDishBtn,
    pressShowDishListBtn,
  };
}
