import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";
import { CStorekeeperChangeStatusFailWindow } from "./CStorekeeperChangeStatusFailWindow";

export function VStorekeeperChangeStatusFailWindow(
    isActive: boolean,
    ucStorekeeperChangeOrderStatus: UCStorekeeperChangeOrderStatus
) {
    if (!isActive) return;

    const { pressShowStorekeeperOrderListBtn } = CStorekeeperChangeStatusFailWindow (
        ucStorekeeperChangeOrderStatus
    );

    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center">
          <h1 className="text-6xl font-bold text-red-800">
            Changing order status failed
          </h1>
          <button
            onClick={pressShowStorekeeperOrderListBtn}
            className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
          >
            <span className="material-icons">arrow_back</span>
            <h2 className="text-2xl font-semibold">Back</h2>
          </button>
        </div>
      );
}