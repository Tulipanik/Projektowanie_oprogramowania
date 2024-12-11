import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";

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