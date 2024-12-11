import { Dispatch } from "react";
import { CourierScreenId, OrderCourierDataDto, UpdateCourierViewAction } from "../../../view_model/Courier";

export class PCourierOrdersList {
  private courierDispatch?: Dispatch<UpdateCourierViewAction>;

  injectClientDispatch(courierDispatch: Dispatch<UpdateCourierViewAction>) {
    this.courierDispatch = courierDispatch;
  }

  showCourierOrdersList(orders: OrderCourierDataDto[]) {
    if (!this.courierDispatch) return;
    this.courierDispatch({ type: "UPDATE_ORDERS", orders: orders });
    this.courierDispatch({ type: "CHANGE_SCREEN", screen: CourierScreenId.ORDER_LIST });
  }
}