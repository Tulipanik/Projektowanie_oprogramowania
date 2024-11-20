import { IOrderAPi } from "../services/IOrder"; 
import { PClientPlaceOrder } from "../view/client/ClientPlaceOrder/PClientPlaceOrder"
import { orderDataDTO, orderDTO } from "../view_model/Order"

export class UCSClientPlaceOrder {
  constructor(
    private pClientPlaceOrder: PClientPlaceOrder,
    private oderApi: IOrderAPi
  ) {}

  showAddressForm() {
    this.pClientPlaceOrder.showAddressFormWindow();
  }

  async placeOrder() { // TODO: funkcja przyjmuje obiekt orderData: orderDTO
    return await this.oderApi.placeOrder().then((number) => {
      if (number > 2) {
        this.pClientPlaceOrder.showOrderPlacedWindow();
      } else {
        this.pClientPlaceOrder.showOrderNotPlacedWindow();
      }
    });
  }

  showOrderSummary() {
    this.pClientPlaceOrder.showOrderSummaryWindow();
  }
}
