import { Dispatch } from "react";
import { UpdateCourierCompanyViewAction } from "../../view_model/CourierCompany";

export class CourierCompanyPresentationDispatcher {
  courierCompanyDispatch!: Dispatch<UpdateCourierCompanyViewAction>;

  injectCourierCompanyDispatch(
    dispatch: Dispatch<UpdateCourierCompanyViewAction>
  ) {
    this.courierCompanyDispatch = dispatch;
  }
}
