import { IOrderAPi } from "../services/IOrder";
import { PClientOrderDetails } from "../view/client/ClientOrders/ClientOrderDetails/PClientOrderDetails";

export class UCShowClientOrderDetails {
  constructor(
    private orderApi: IOrderAPi,
    private pClientOrderDetails: PClientOrderDetails
  ) {}

  async getClientOrderDetails(orderId: number) {
    return await this.orderApi.getOrderData(orderId).then((orderDetails) => {
      this.pClientOrderDetails.showClientOrderDetails(orderDetails);
    });
  }
}
