import { UCCateringCompanyAddNewDish } from "../../../use_cases/UCSCourierCateringAddNewDish";
import { UCShowCateringCompanyMainWindow } from "../../../use_cases/UCSShowCateringCompanyMainWindow";
import { CCateringCompanyMenu } from "./CCateringCompanyMenu";

export function VCateringCompanyMenu(
  isActive: boolean,
  ucshowCateringCompanyMainWindow: UCShowCateringCompanyMainWindow,
  ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish
) {
  if (!isActive) return;

  const { pressBackToMainWindowBtn, pressShowDishListBtn } =
    CCateringCompanyMenu(
      ucshowCateringCompanyMainWindow,
      ucsCateringCompanyAddNewDish
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Catering Company Main Window</h1>
      <div className="flex flex-row justify-between gap-2">
        <button
          onClick={pressBackToMainWindowBtn}
          className="px-6 py-3 mb-4 bg-sky-400 text-white rounded-md hover:bg-sky-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">arrow_back</span>
          Back to main window
        </button>
        <button
          onClick={pressShowDishListBtn}
          className="px-6 py-3 mb-4 bg-sky-400 text-white rounded-md hover:bg-sky-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">restaurant_menu</span>
          My offers
        </button>
      </div>
    </div>
  );
}
