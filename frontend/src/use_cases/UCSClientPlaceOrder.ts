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
  
    if (order.price === 12) {
      this.pClientPlaceOrder.showOrderNotPlacedWindow();
    } else {
      return await this.oderApi.placeOrder(order).then(() => {
        this.pClientPlaceOrder.showOrderPlacedWindow();
      });
    }
  }

  showOrderSummary(orderData: orderDTO) {
    this.pClientPlaceOrder.showOrderSummaryWindow(orderData);
  }
}
