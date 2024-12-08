import { UCCateringCompanyAddNewDish } from "../../../use_cases/UCSCourierCateringAddNewDish";
import { UCShowCateringCompanyMainWindow } from "../../../use_cases/UCSShowCateringCompanyMainWindow";

export function CCateringCompanyMenu(
  ucshowCateringCompanyMainWindow: UCShowCateringCompanyMainWindow,
  ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish
) {
  function pressBackToMainWindowBtn() {
    ucshowCateringCompanyMainWindow.backSelected();
  }

  function pressShowDishListBtn() {
    ucsCateringCompanyAddNewDish.showCateringCompanyDishesList();
  }

  return { pressBackToMainWindowBtn, pressShowDishListBtn };
}
