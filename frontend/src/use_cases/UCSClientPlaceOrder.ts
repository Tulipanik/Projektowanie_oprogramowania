import { PClientPlaceOrder } from "../view/client/ClientPlaceOrder/PClientPlaceOrder"
import { AddressData } from "../view_model/AddressData"

export class UCSClientPlaceOrder {
  constructor(private pClientPlaceOrder: PClientPlaceOrder) {}

  submitOrder() {
    // W tej metodzie można dodać logikę walidacji lub przetwarzania danych
    this.pClientPlaceOrder.displayConfirmation("Zamówienie zostało złożone!");
  }

  showClientPlaceOrder() {
    this.pClientPlaceOrder.showClientPlaceOrderWindow();
  }
}
