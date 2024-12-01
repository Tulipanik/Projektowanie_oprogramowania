import { UCCourierCompanyAddNewDish } from "../../../../use_cases/UCSCourierCompanyAddNewDish";

export function CCourierCompanyAddDishSuccessWindow(
  ucsCourierCompanyAddNewDish: UCCourierCompanyAddNewDish
) {
  function pressShowDishListBtn() {
    ucsCourierCompanyAddNewDish.showCourierCompanyDishesList();
  }

  return {
    pressShowDishListBtn,
  };
}
