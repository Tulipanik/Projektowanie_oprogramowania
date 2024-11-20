import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { orderDataDTO, orderDTO } from "../../../view_model/Order"

export function CClientPlaceOrder(
  ucsClientPlaceOrder: UCSClientPlaceOrder,
  ucsShowClientCart: UCSShowClientCart
) {

  function pressShowClientCartBtn() {
    ucsShowClientCart.showClientCart()
  }

  function pressPlaceOrderBtn() {
    console.log("Wcisnalem przycisk pressPlaceOrderBtn")
    ucsClientPlaceOrder.placeOrder();
  }

  function pressOrderSummaryBtn() { //TODO: dodac clientData: clientDataDTO (???diagram???)
    ucsClientPlaceOrder.showOrderSummary()
  }

  return { pressShowClientCartBtn, pressPlaceOrderBtn, pressOrderSummaryBtn };
}
