import { UCShowCourierCompanyDishesList } from "../../../../use_cases/UCSShowCourierCompanyDishesList";
import { UCShowCourierCompanyMainWindow } from "../../../../use_cases/UCSShowCourierCompanyMainWindow";
import { CCourierCompanyDishes } from "../../CourierCompanyDishes/CCourierCompanyDishes";

export function VCourierCompanyAddDishFailWindow(
  isActive: boolean,
  ucsShowCourierCompanyDishesList: UCShowCourierCompanyDishesList,
  ucshowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow
) {
  if (!isActive) return;

  const { pressShowCourierCompanyAddDishWindowBtn } = CCourierCompanyDishes(
    ucsShowCourierCompanyDishesList,
    ucshowCourierCompanyMainWindow
  );

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-6xl font-bold text-red-800">
        Adding new dish failed
      </h1>
      <button
        onClick={pressShowCourierCompanyAddDishWindowBtn}
        className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
      >
        <span className="material-icons">arrow_back</span>
        <h2 className="text-2xl font-semibold">Back</h2>
      </button>
    </div>
  );
}
