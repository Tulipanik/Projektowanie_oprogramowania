import { UCCourierCompanyAddNewDish } from "../../../use_cases/UCSCourierCompanyAddNewDish";
import { UCShowCourierCompanyMainWindow } from "../../../use_cases/UCSShowCourierCompanyMainWindow";
import { AddDishDTO } from "../../../view_model/Dish";

export function CCourierCompanyDishes(
  ucsCourierCompanyAddNewDish: UCCourierCompanyAddNewDish,
  ucsShowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow
) {
  function pressShowCourierCompanyMainWindowBtn() {
    ucsShowCourierCompanyMainWindow.showCourierCompanyMainWindow();
  }

  function pressAddNewDishBtn(dish: AddDishDTO) {
    const newDish: AddDishDTO = {
      ...dish,
      cateringCompanyId: 1,
    };
    ucsCourierCompanyAddNewDish.addDishToOffer(newDish);
  }

  function pressShowCourierCompanyAddDishWindowBtn() {
    ucsCourierCompanyAddNewDish.showCourierCompanyAddDishWindow();
  }

  function pressShowDishListBtn() {
    ucsCourierCompanyAddNewDish.showCourierCompanyDishesList();
  }

  return {
    pressShowCourierCompanyMainWindowBtn,
    pressAddNewDishBtn,
    pressShowCourierCompanyAddDishWindowBtn,
    pressShowDishListBtn,
  };
}
