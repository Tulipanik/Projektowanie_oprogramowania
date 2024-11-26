import { UCCourierCompanyAddNewDish } from "../../../use_cases/UCSCourierCompanyAddNewDish";
import { UCShowCourierCompanyMainWindow } from "../../../use_cases/UCSShowCourierCompanyMainWindow";
import { CourierCompanyViewState } from "../../../view_model/CourierCompany";
import { CCourierCompanyDishes } from "./CCourierCompanyDishes";

export function VCourierCompanyDishes(
  isActive: boolean,
  ucshowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow,
  ucsCourierCompanyAddNewDish: UCCourierCompanyAddNewDish,
  state: Pick<CourierCompanyViewState, "offer">
) {
  if (!isActive) return;

  const {
    pressShowCourierCompanyMainWindowBtn,
    pressShowCourierCompanyAddDishWindowBtn,
  } = CCourierCompanyDishes(
    ucsCourierCompanyAddNewDish,
    ucshowCourierCompanyMainWindow
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-screen">
        <button
          onClick={pressShowCourierCompanyMainWindowBtn}
          className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
        >
          <span className="material-icons">arrow_back</span>
          <h2 className="text-2xl font-semibold">Back</h2>
        </button>
        <button
          onClick={pressShowCourierCompanyAddDishWindowBtn}
          className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
        >
          <span className="material-icons">add</span>
          <h2 className="text-2xl font-semibold">Add New Dish</h2>
        </button>
      </div>
      <div className="flex w-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-sky-400 p-4">
          Courier Company Dishes
        </h1>
      </div>
    </div>
  );
}
