import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";
import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";
import { CStorekeeperChangeStatusSuccessWindow } from "./CStorekeeperChangeStatusSuccessWindow";

export function VStorekeeperChangeStatusSuccessWindow(
    isActive: boolean,
    ucShowStorekeeperMainWindow: UCShowStorekeeperMainWindow
) {
    if (!isActive) return;

    const { pressShowStorekeeperMainWindowBtn } = CStorekeeperChangeStatusSuccessWindow(
        ucShowStorekeeperMainWindow
    );

    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center">
            <h1 className="text-6xl font-bold text-green-800">
                Successfully changed order status
            </h1>
            <button
                onClick={pressShowStorekeeperMainWindowBtn}
                className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
            >
                <span className="material-icons">arrow_back</span>
                <h2 className="text-2xl font-semibold">Go to Main Window</h2>
            </button>
        </div>
    );
}