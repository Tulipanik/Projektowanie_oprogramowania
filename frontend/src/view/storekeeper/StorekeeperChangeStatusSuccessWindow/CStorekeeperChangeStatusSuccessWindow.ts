import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";
import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";

export function CStorekeeperChangeStatusSuccessWindow(
    ucShowStorekeeperMainWindow: UCShowStorekeeperMainWindow
) {
    function pressShowStorekeeperMainWindowBtn() {
        ucShowStorekeeperMainWindow.handleShowStorekeeperMainWindowBtnClick();
    }

    return {
        pressShowStorekeeperMainWindowBtn
    };
}