import { orderDTO, storekeeperOrderDTO } from "../../../view_model/Order";
import { StorekeeperScreenId } from "../../../view_model/Storekeeper";
import { StorekeeperPresentationDispatcher } from "../StorekeeperPresentationDispatcher";

export class PStorekeeperChangeOrderStatus extends StorekeeperPresentationDispatcher {
    showOrderList(orderList: orderDTO[]) { // TODO: jak sie be ogarnie to zmienic typ na storekeeperOrderDTO[]
        this.storekeeperDispatch?.({
            type: "UPDATE_ORDER_LIST",
            orderList: orderList,
        });
        this.storekeeperDispatch?.({
            type: "CHANGE_SCREEN",
            screen: StorekeeperScreenId.CHANGE_ORDER_STATUS_LIST,
        });
    }

    showStatusChangedWindow() {
        this.storekeeperDispatch?.({
            type: "CHANGE_SCREEN",
            screen: StorekeeperScreenId.STATUS_CHANGE_SUCCESS
        })
    }

    showStatusNotChangedWindow() {
        this.storekeeperDispatch?.({
            type: "CHANGE_SCREEN",
            screen: StorekeeperScreenId.STATUS_CHANGE_FAIL
        })
    }
}