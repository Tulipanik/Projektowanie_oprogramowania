import { UCCateringCompanyAddNewDish } from "../../../../use_cases/UCSCourierCateringAddNewDish";
import { CManagerAddCourierCompanySuccessWindow } from "./CManagerAddCourierCompanySuccessWindow";

export function VCateringCompanyAddDishSuccessWindow(
  isActive: boolean,
  // ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish // TODO dodać odpowiedni ucs
) {
  if (!isActive) return;

  const { pressShowCourierCompanyListBtn } = CManagerAddCourierCompanySuccessWindow(
    // ucsCateringCompanyAddNewDish
  );

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-6xl font-bold text-green-800">
        Successfully added new dish
      </h1>
      <button
        onClick={pressShowCourierCompanyListBtn}
        className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
      >
        <span className="material-icons">arrow_back</span>
        <h2 className="text-2xl font-semibold">Go to Main Window</h2>
      </button>
    </div>
  );
}
