import { UCShowCourierCompanyDishesList } from "../../../use_cases/UCSShowCourierCompanyDishesList";
import { UCShowCourierCompanyMainWindow } from "../../../use_cases/UCSShowCourierCompanyMainWindow";

export function CCourierCompanyMenu(
  ucshowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow,
  ucsShowCourierCompanyDishesList: UCShowCourierCompanyDishesList
) {
  function pressBackToMainWindowBtn() {
    ucshowCourierCompanyMainWindow.backSelected();
  }

  function pressShowDishListBtn() {
    ucsShowCourierCompanyDishesList.showCourierCompanyDishesList();
  }

  return { pressBackToMainWindowBtn, pressShowDishListBtn };
}
