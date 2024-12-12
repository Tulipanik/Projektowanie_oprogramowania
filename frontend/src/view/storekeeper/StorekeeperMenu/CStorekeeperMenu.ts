import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";
import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";
export function CStorekeeperMenu(
    ucshowStorekeeperMainWindow: UCShowStorekeeperMainWindow,
    ucsStorekeeperChangeOrderStatus: UCStorekeeperChangeOrderStatus
) {
    function pressBackToMainWindowBtn() {
        ucshowStorekeeperMainWindow.handleBackSelectedBtnClick();
    }

    function pressShowStorekeeperOrderListBtn() {
        ucsStorekeeperChangeOrderStatus.handleShowStorekeeperOrderListBtn();
    }

    return { pressBackToMainWindowBtn, pressShowStorekeeperOrderListBtn }
}