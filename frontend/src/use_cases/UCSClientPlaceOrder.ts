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

    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    if (randomNumber === 1) {
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
