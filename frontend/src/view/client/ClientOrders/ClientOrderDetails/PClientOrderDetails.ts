import { ClientScreenId } from "../../../../view_model/Client";
import { orderDTO } from "../../../../view_model/Order";
import { ClientPresentationDispatcher } from "../../ClientPresentationDispatcher";

export class PClientOrderDetails extends ClientPresentationDispatcher {
  showClientOrderDetails(orderDetails: orderDTO) {
    this.clientDispatch?.({
      type: "UPDATE_ORDER_DETAILS",
      orderDetails: orderDetails,
    });
    this.clientDispatch?.({
      type: "CHANGE_SCREEN",
      screen: ClientScreenId.ORDER_DETAILS,
    });
  }
}
