import { IOrderAPi } from "../services/IOrder";
import { PStorekeeperChangeOrderStatus } from "../view/storekeeper/StorekeeperChangeOrderStatus/PStorekeeperChangeOrderStatus";
import { PStorekeeperMainWindow } from "../view/storekeeper/StorekeeperMainWindow/PStorekeeperMainWindow";
import { MOCK_CLIENT_ID } from "./UCSCourierCateringAddNewDish";

export class UCStorekeeperChangeOrderStatus {
    constructor(
        private pStorekeeperChangeOrderStatus: PStorekeeperChangeOrderStatus,
        private pStorekeeperMainWindow: PStorekeeperMainWindow,
        private orderApi: IOrderAPi
    ) {}

    handleShowStorekeeperMainWindow() {
        this.pStorekeeperMainWindow.showMainWindow();
    }

    async handleShowStorekeeperOrderListBtn() {
        // console.log("wcisnalem")
        return this.orderApi
        .getOrdersForClient(MOCK_CLIENT_ID)
        .then((orderList) => {
            this.pStorekeeperChangeOrderStatus.showOrderList(orderList) // TODO: zmienic na odpowiedni endpoint od backendowcow
        });
    }

    async handleOrderStatusBtn(orderId: number, status: string) {
        return this.orderApi
        .setOrderStatus(orderId, status)
        .then((boolean) =>{
            if (boolean) {
                this.pStorekeeperChangeOrderStatus.showStatusChangedWindow();
            } else {
                this.pStorekeeperChangeOrderStatus.showStatusNotChangedWindow();
            }
        });
    }
}