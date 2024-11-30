import { IOrderAPi } from "../services/IOrder";
import { PClientPlaceOrder } from "../view/client/ClientPlaceOrder/PClientPlaceOrder";
import { orderDTO } from "../view_model/Order";

export class UCSClientPlaceOrder {
  constructor(
    private pClientPlaceOrder: PClientPlaceOrder,
    private oderApi: IOrderAPi
  ) {}

  showAddressForm() {
    this.pClientPlaceOrder.showAddressFormWindow();
  }

  async placeOrder(order: orderDTO) {
    return await this.oderApi.placeOrder(order).then((number) => {
      if (number > 2) {
        this.pClientPlaceOrder.showOrderPlacedWindow();
      } else {
        this.pClientPlaceOrder.showOrderNotPlacedWindow();
      }
    });
  }

  showOrderSummary(orderData: orderDTO) {
    this.pClientPlaceOrder.showOrderSummaryWindow(orderData);
  }
}
