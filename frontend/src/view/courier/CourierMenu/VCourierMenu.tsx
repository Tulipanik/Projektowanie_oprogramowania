import { UCSShowCourierMainWindow } from "../../../use_cases/UCSShowCourierMainWindow";
import { UCSShowCourierOrdersList } from "../../../use_cases/UCSShowCourierOrdersList";
import { CCourierMenu } from "./CCourierMenu";

export function VCourierMenu(
  isActive: boolean,
  ucsShowCourierMainWindow: UCSShowCourierMainWindow,
  ucsShowCourierOrdersList: UCSShowCourierOrdersList,
) {

  if (!isActive) return;

  const { pressBackToMainWindowBtn, pressShowOrdersListBtn } = CCourierMenu(ucsShowCourierMainWindow, ucsShowCourierOrdersList);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Courier Main Window</h1>
      <div className="flex flex-row justify-between gap-2">
        <button
          onClick={pressBackToMainWindowBtn}
          className="px-6 py-3 mb-4 bg-orange-400 text-white rounded-md hover:bg-orange-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">arrow_back</span>
          Back to main window
        </button>
        <button
          onClick={pressShowOrdersListBtn}
          className="px-6 py-3 mb-4 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">delivery_dining</span>
          Show orders list
        </button>
      </div>
    </div>
  );

}