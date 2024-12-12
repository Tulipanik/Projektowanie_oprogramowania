import { IOrderAPi } from "../services/IOrder";
import { PClientOrders } from "../view/client/ClientOrders/PClientOrders";
import { MOCK_CLIENT_ID } from "./UCSCourierCateringAddNewDish";

export class UCShowClientOrderList {
  constructor(
    private pClientOrders: PClientOrders,
    private orderApi: IOrderAPi
  ) {}

  async showClientOrderList() {
    return this.orderApi
      .getOrdersForClient(MOCK_CLIENT_ID)
      .then((orderList) => {
        this.pClientOrders.showClientOrderList(orderList);
      });
  }
}
