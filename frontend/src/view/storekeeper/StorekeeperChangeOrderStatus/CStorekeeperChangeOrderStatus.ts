import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";
import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";

export function CStorekeeperChangeOrderStatus(
    ucShowStorekeeperMainWindow: UCShowStorekeeperMainWindow,
    ucStorekeeperChangeOrderStatus: UCStorekeeperChangeOrderStatus
){
    function pressShowStorekeeperMainWindowBtn() {
        ucShowStorekeeperMainWindow.handleShowStorekeeperMainWindowBtnClick();
    }

    function pressChangeOrderStatusBtn(orderId: number, status: string) {
        ucStorekeeperChangeOrderStatus.handleOrderStatusBtn(orderId, status);
    }

    function pressShowStorekeeperOrderList() {
        ucStorekeeperChangeOrderStatus.handleShowStorekeeperOrderListBtn();
    }

    return {
        pressShowStorekeeperMainWindowBtn,
        pressChangeOrderStatusBtn,
        pressShowStorekeeperOrderList
    }
}