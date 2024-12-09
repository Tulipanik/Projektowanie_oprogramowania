import { UCCateringCompanyAddNewDish } from "../../../../use_cases/UCSCourierCateringAddNewDish";

export function CCateringCompanyAddDishSuccessWindow(
  ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish
) {
  function pressShowDishListBtn() {
    ucsCateringCompanyAddNewDish.showCateringCompanyDishesList();
  }

  return {
    pressShowDishListBtn,
  };
}
