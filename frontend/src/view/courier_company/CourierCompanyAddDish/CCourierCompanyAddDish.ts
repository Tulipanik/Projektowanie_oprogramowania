import { UCCourierCompanyAddNewDish } from "../../../use_cases/UCSCourierCompanyAddNewDish";
import { AddDishDTO } from "../../../view_model/Dish";

export function CCourierCompanyAddDish(
  ucsCourierCompanyAddNewDish: UCCourierCompanyAddNewDish
) {
  function pressAddNewDishBtn(dish: AddDishDTO) {
    const newDish: AddDishDTO = {
      ...dish,
      cateringCompanyId: 1,
    };
    ucsCourierCompanyAddNewDish.addDishToOffer(newDish);
  }

  function pressShowDishListBtn() {
    ucsCourierCompanyAddNewDish.showCourierCompanyDishesList();
  }

  return {
    pressAddNewDishBtn,
    pressShowDishListBtn,
  };
}
