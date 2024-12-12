import { UCCateringCompanyAddNewDish } from "../../../../use_cases/UCSCourierCateringAddNewDish";

export function CCateringCompanyAddDishFailWindow(
  ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish
) {
  function pressShowCateringCompanyAddDishWindowBtn() {
    ucsCateringCompanyAddNewDish.showCateringCompanyAddDishWindow();
  }

  return {
    pressShowCateringCompanyAddDishWindowBtn,
  };
}
