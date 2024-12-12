import { ClientScreenId } from "../../../view_model/Client";
import { orderDTO } from "../../../view_model/Order";
import { ClientPresentationDispatcher } from "../ClientPresentationDispatcher";

export class PClientOrders extends ClientPresentationDispatcher {
  showClientOrderList(orderList: orderDTO[]) {
    this.clientDispatch?.({
      type: "UPDATE_ORDER_LIST",
      orderList: orderList,
    });
    this.clientDispatch?.({
      type: "CHANGE_SCREEN",
      screen: ClientScreenId.ORDERS,
    });
  }
}
