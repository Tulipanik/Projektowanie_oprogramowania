import { UCCourierCompanyAddNewDish } from "../../../../use_cases/UCSCourierCompanyAddNewDish";
import { CCourierCompanyAddDishSuccessWindow } from "./CCourierComapnyAddDishSuccessWindow";

export function VCourierCompanyAddDishSuccessWindow(
  isActive: boolean,
  ucsCourierCompanyAddNewDish: UCCourierCompanyAddNewDish
) {
  if (!isActive) return;

  const { pressShowDishListBtn } = CCourierCompanyAddDishSuccessWindow(
    ucsCourierCompanyAddNewDish
  );

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-6xl font-bold text-green-800">
        Successfully added new dish
      </h1>
      <button
        onClick={pressShowDishListBtn}
        className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
      >
        <span className="material-icons">arrow_back</span>
        <h2 className="text-2xl font-semibold">Go to Main Window</h2>
      </button>
    </div>
  );
}
