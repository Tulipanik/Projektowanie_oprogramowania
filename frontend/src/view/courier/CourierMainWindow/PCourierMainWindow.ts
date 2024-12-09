import { Dispatch } from "react";
import { CourierScreenId, UpdateCourierViewAction } from "../../../view_model/Courier";
import { ScreenId } from "../../../view_model/Types";
import { PresentationDispatcher } from "../../PresentationDispatcher";

export class PCourierMainWindow extends PresentationDispatcher {

  private courierDispatch?: Dispatch<UpdateCourierViewAction>;

  injectClientDispatch(courierDispatch: Dispatch<UpdateCourierViewAction>) {
    this.courierDispatch = courierDispatch;
  }

  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }

  showCourierMainWindow() {
    this.globalUpdateView?.(ScreenId.COURIER_MAIN_WINDOW);
    this.courierDispatch && this.courierDispatch({ type: "CHANGE_SCREEN", screen: CourierScreenId.MAIN_WINDOW });
  }

}
