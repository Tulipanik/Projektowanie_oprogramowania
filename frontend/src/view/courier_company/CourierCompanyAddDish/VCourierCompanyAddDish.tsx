import { UCShowCourierCompanyDishesList } from "../../../use_cases/UCSShowCourierCompanyDishesList";
import { UCShowCourierCompanyMainWindow } from "../../../use_cases/UCSShowCourierCompanyMainWindow";
import { AddDishDTO, mealType } from "../../../view_model/Dish";
import { CCourierCompanyDishes } from "../CourierCompanyDishes/CCourierCompanyDishes";
import { CCourierCompanyMenu } from "../CourierCompanyMenu/CCourierCompanyMenu";
import { CourierCompanyAddDishForm } from "./ui/CourierCompanyAddDishForm";

export function VCourierCompanyAddDish(
  isActive: boolean,
  ucshowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow,
  ucsShowCourierCompanyDishesList: UCShowCourierCompanyDishesList
) {
  const { pressAddNewDishBtn, pressShowDishListBtn } = CCourierCompanyDishes(
    ucsShowCourierCompanyDishesList,
    ucshowCourierCompanyMainWindow
  );

  if (!isActive) return;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-screen">
        <button
          onClick={pressShowDishListBtn}
          className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
        >
          <span className="material-icons">arrow_back</span>
          <h2 className="text-2xl font-semibold">Back</h2>
        </button>
      </div>
      <div className="flex w-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-sky-400 p-4">
          Add New Dish to Offer
        </h1>
      </div>
      {CourierCompanyAddDishForm(pressAddNewDishBtn)}
    </div>
  );
}
