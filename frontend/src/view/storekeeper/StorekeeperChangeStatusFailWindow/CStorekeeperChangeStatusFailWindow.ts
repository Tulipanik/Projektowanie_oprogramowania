import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";

export function CStorekeeperChangeStatusFailWindow(
    ucStorekeeperChangeOrderStatus: UCStorekeeperChangeOrderStatus
) {
    function pressShowStorekeeperOrderListBtn() {
        ucStorekeeperChangeOrderStatus.handleShowStorekeeperOrderListBtn();
    }

    return {
        pressShowStorekeeperOrderListBtn
    };
}