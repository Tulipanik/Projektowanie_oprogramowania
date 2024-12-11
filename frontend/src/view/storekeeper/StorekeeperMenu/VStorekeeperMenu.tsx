import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";
import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";
import { CStorekeeperMenu } from "./CStorekeeperMenu";

export function VStorekeeperMenu(
  isActive: boolean,
  ucshowStorekeeperMainWindow: UCShowStorekeeperMainWindow,
  ucsStorekeeperChangeOrderStatus: UCStorekeeperChangeOrderStatus
) {
  if (!isActive) return;

  const { pressBackToMainWindowBtn, pressShowStorekeeperOrderListBtn } =
    CStorekeeperMenu(
        ucshowStorekeeperMainWindow,
        ucsStorekeeperChangeOrderStatus
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Storekeeper Main Window</h1>
      <div className="flex flex-row justify-between gap-2">
        <button
          onClick={pressBackToMainWindowBtn}
          className="px-6 py-3 mb-4 bg-green-500 text-white rounded-md hover:bg-green-600 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">arrow_back</span>
          Back to main window
        </button>
        <button
          onClick={pressShowStorekeeperOrderListBtn}
          className="px-6 py-3 mb-4 bg-green-500 text-white rounded-md hover:bg-green-600 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">restaurant_menu</span>
          Show order list
        </button>
      </div>
    </div>
  );
}
