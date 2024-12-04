import { UCCateringCompanyAddNewDish } from "../../../use_cases/UCSCourierCateringAddNewDish";
import { UCShowCateringCompanyMainWindow } from "../../../use_cases/UCSShowCateringCompanyMainWindow";
import { CateringCompanyViewState } from "../../../view_model/CateringCompany";
import { CCateringCompanyDishes } from "./CCateringCompanyDishes";

export function VCateringCompanyDishes(
  isActive: boolean,
  ucshowCateringCompanyMainWindow: UCShowCateringCompanyMainWindow,
  ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish,
  state: Pick<CateringCompanyViewState, "offer">
) {
  if (!isActive) return;

  const {
    pressShowCateringCompanyMainWindowBtn,
    pressShowCateringCompanyAddDishWindowBtn,
  } = CCateringCompanyDishes(
    ucsCateringCompanyAddNewDish,
    ucshowCateringCompanyMainWindow
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-screen">
        <button
          onClick={pressShowCateringCompanyMainWindowBtn}
          className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
        >
          <span className="material-icons">arrow_back</span>
          <h2 className="text-2xl font-semibold">Back</h2>
        </button>
        <button
          onClick={pressShowCateringCompanyAddDishWindowBtn}
          className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
        >
          <span className="material-icons">add</span>
          <h2 className="text-2xl font-semibold">Add New Dish</h2>
        </button>
      </div>
      <div className="flex w-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-sky-400 p-4">
          Catering Company Dishes
        </h1>
      </div>
    </div>
  );
}
