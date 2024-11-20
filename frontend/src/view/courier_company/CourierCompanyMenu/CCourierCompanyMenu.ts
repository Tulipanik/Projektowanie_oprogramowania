import { UCCourierCompanyAddNewDish } from "../../../use_cases/UCSCourierCompanyAddNewDish";
import { UCShowCourierCompanyMainWindow } from "../../../use_cases/UCSShowCourierCompanyMainWindow";

export function CCourierCompanyMenu(
  ucshowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow,
  ucsCourierCompanyAddNewDish: UCCourierCompanyAddNewDish
) {
  function pressBackToMainWindowBtn() {
    ucshowCourierCompanyMainWindow.backSelected();
  }

  function pressShowDishListBtn() {
    ucsCourierCompanyAddNewDish.showCourierCompanyDishesList();
  }

  return { pressBackToMainWindowBtn, pressShowDishListBtn };
}
