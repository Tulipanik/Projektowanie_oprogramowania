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

  function pressShowCourierCompanyAddDishWindowBtn() {
    ucsCourierCompanyAddNewDish.showCourierCompanyAddDishWindow();
  }


  return {
    pressShowCourierCompanyMainWindowBtn,
    pressShowCourierCompanyAddDishWindowBtn,
  };
}
