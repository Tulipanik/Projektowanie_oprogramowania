import { UCShowCourierCompanyDishesList } from "../../../use_cases/UCSShowCourierCompanyDishesList";
import { UCShowCourierCompanyMainWindow } from "../../../use_cases/UCSShowCourierCompanyMainWindow";
import { AddDishDTO } from "../../../view_model/Dish";

export function CCourierCompanyDishes(
  ucsShowCourierCompanyDishesList: UCShowCourierCompanyDishesList,
  ucsShowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow
) {
  function pressShowCourierCompanyMainWindowBtn() {
    ucsShowCourierCompanyMainWindow.showCourierCompanyMainWindow();
  }

  function pressAddNewDishBtn(dish: AddDishDTO) {
    const newDish: AddDishDTO = {
      ...dish,
      cateringCompanyId: 1,
    };
    ucsShowCourierCompanyDishesList.addDishToOffer(newDish);
  }

  function pressShowCourierCompanyAddDishWindowBtn() {
    ucsShowCourierCompanyDishesList.showCourierCompanyAddDishWindow();
  }

  function pressShowDishListBtn() {
    ucsShowCourierCompanyDishesList.showCourierCompanyDishesList();
  }

  return {
    pressShowCourierCompanyMainWindowBtn,
    pressAddNewDishBtn,
    pressShowCourierCompanyAddDishWindowBtn,
    pressShowDishListBtn,
  };
}
