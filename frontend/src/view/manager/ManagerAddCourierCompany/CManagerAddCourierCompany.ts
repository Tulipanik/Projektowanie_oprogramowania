import { UCCateringCompanyAddNewDish } from "../../../use_cases/UCSCourierCateringAddNewDish";
import { AddDishDTO } from "../../../view_model/Dish";

export function CManagerAddCourierCompany(
  // ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish
) {
  function pressAddNewCourierCompanyBtn(dish: AddDishDTO) {
    const newDish: AddDishDTO = {
      ...dish,
      cateringCompanyId: 1,
    };
    // ucsCateringCompanyAddNewDish.addDishToOffer(newDish); // TODO stworzyć i dodać odpowiedniego ucs
  }

  function pressShowCourierCompanyListBtn() {
    // ucsCateringCompanyAddNewDish.showCateringCompanyDishesList();
  }

  return {
    pressAddNewCourierCompanyBtn,
    pressShowCourierCompanyListBtn,
  };
}
