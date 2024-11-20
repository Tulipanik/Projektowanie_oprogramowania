import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { OrderDishDTO } from "../../../view_model/Dish";
import { orderDataDTO, orderDTO, orderStatus } from "../../../view_model/Order";

export function CClientPlaceOrder(
  ucsClientPlaceOrder: UCSClientPlaceOrder,
  ucsShowClientCart: UCSShowClientCart
) {
  function pressShowClientCartBtn() {
    ucsShowClientCart.showClientCart();
  }

  function pressPlaceOrderBtn(order: orderDTO) {
    ucsClientPlaceOrder.placeOrder(order);
  }

  function pressNextBtn(cart: OrderDishDTO[]) {
    if (cart.find((item) => item.date === null)) {
      ucsShowClientCart.setErrorMassage(
        "All dishes must have delivery dates set!"
      );
    } else {
      ucsClientPlaceOrder.showAddressForm();
    }
  }

  function pressOrderSummaryBtn(cart: OrderDishDTO[], orderData: orderDataDTO) {
    const order: orderDTO = {
      clientData: orderData,
      meals: cart,
      orderDate: new Date(),
      orderId: 1, // TODO: dowiedziec sie po co to
      price: cart.reduce((sum, item) => sum + item.dish.price, 0),
      status: orderStatus.PLACED,
    };
    ucsClientPlaceOrder.showOrderSummary(order);
  }

  return {
    pressShowClientCartBtn,
    pressPlaceOrderBtn,
    pressOrderSummaryBtn,
    pressNextBtn,
  };
}
