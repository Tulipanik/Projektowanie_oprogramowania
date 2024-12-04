import { UCCateringCompanyAddNewDish } from "../../../use_cases/UCSCourierCateringAddNewDish";
import { UCShowCateringCompanyMainWindow } from "../../../use_cases/UCSShowCateringCompanyMainWindow";

export function CCateringCompanyDishes(
  ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish,
  ucsShowCateringCompanyMainWindow: UCShowCateringCompanyMainWindow
) {
  function pressShowCateringCompanyMainWindowBtn() {
    ucsShowCateringCompanyMainWindow.showCateringCompanyMainWindow();
  }

  function pressShowCateringCompanyAddDishWindowBtn() {
    ucsCateringCompanyAddNewDish.showCateringCompanyAddDishWindow();
  }


  return {
    pressShowCateringCompanyMainWindowBtn,
    pressShowCateringCompanyAddDishWindowBtn,
  };
}
