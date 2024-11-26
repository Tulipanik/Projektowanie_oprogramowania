import { UCCourierCompanyAddNewDish } from "../../../../use_cases/UCSCourierCompanyAddNewDish";

export function CCourierCompanyAddDishFailWindow(
  ucsCourierCompanyAddNewDish: UCCourierCompanyAddNewDish
) {
  function pressShowCourierCompanyAddDishWindowBtn() {
    ucsCourierCompanyAddNewDish.showCourierCompanyAddDishWindow();
  }

  return {
    pressShowCourierCompanyAddDishWindowBtn,
  };
}
