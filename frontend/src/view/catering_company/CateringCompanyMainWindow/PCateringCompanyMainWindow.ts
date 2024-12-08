import { Dispatch } from "react";
import { PresentationDispatcher } from "../../PresentationDispatcher";
import { ScreenId } from "../../../view_model/Types";
import {
  CateringCompanyScreenId,
  UpdateCateringCompanyViewAction,
} from "../../../view_model/CateringCompany";

export class PCateringCompanyMainWindow extends PresentationDispatcher {
  private cateringCompanyDispatch?: Dispatch<UpdateCateringCompanyViewAction>;

  injectCateringCompanyDispatch(
    cateringCompanyDispatch: Dispatch<UpdateCateringCompanyViewAction>
  ) {
    this.cateringCompanyDispatch = cateringCompanyDispatch;
  }

  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }

  showCateringCompanyMainWindow() {
    this.globalUpdateView?.(ScreenId.COURIER_COMPANY_MAIN_WINDOW);
    this.cateringCompanyDispatch &&
      this.cateringCompanyDispatch({
        type: "CHANGE_SCREEN",
        screen: CateringCompanyScreenId.MAIN_WINDOW,
      });
  }
}
