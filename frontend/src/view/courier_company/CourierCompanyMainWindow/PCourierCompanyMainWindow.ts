import { Dispatch } from "react";
import { PresentationDispatcher } from "../../PresentationDispatcher";
import { ScreenId } from "../../../view_model/Types";
import {
  CourierCompanyScreenId,
  UpdateCourierCompanyViewAction,
} from "../../../view_model/CourierCompany";

export class PCourierCompanyMainWindow extends PresentationDispatcher {
  private courierCompanyDispatch?: Dispatch<UpdateCourierCompanyViewAction>;

  injectCourierCompanyDispatch(
    courierCompanyDispatch: Dispatch<UpdateCourierCompanyViewAction>
  ) {
    this.courierCompanyDispatch = courierCompanyDispatch;
  }

  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }

  showCourierCompanyMainWindow() {
    this.globalUpdateView?.(ScreenId.COURIER_COMPANY_MAIN_WINDOW);
    this.courierCompanyDispatch &&
      this.courierCompanyDispatch({
        type: "CHANGE_SCREEN",
        screen: CourierCompanyScreenId.MAIN_WINDOW,
      });
  }
}
