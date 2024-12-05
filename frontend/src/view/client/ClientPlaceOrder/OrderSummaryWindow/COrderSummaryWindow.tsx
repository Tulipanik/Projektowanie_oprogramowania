import { UCSClientPlaceOrder } from "../../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../../use_cases/UCSShowClientCart";
import { OrderDishDTO } from "../../../../view_model/Dish";
import { orderDataDTO, orderDTO, orderStatus } from "../../../../view_model/Order";

export function COrderSummaryWindow(
  ucsClientPlaceOrder: UCSClientPlaceOrder,
  ucsShowClientCart: UCSShowClientCart
) {

  function pressPlaceOrderBtn(order: orderDTO) {
    ucsClientPlaceOrder.placeOrder(order);
  }

  function pressNextBtn(cart: OrderDishDTO[]) {
    if (cart.find((item) => item.date === null)) {
      ucsShowClientCart.handleSetErrorMassage(
        "All dishes must have delivery dates set!"
      );
    } else {
      ucsClientPlaceOrder.showAddressForm();
    }
  }

  return {
    pressPlaceOrderBtn,
    pressNextBtn,
  };
}
