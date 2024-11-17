import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { AddressData } from "../../../view_model/AddressData"

export function CClientPlaceOrder(ucsClientPlaceOrder: UCSClientPlaceOrder, ucsShowClientCart: UCSShowClientCart) {
  function handleSubmit() {
    ucsClientPlaceOrder.submitOrder();
  }

  function pressShowClientCartBtn() {
    ucsShowClientCart.showClientCart()
  }

  return { handleSubmit, pressShowClientCartBtn };
}
