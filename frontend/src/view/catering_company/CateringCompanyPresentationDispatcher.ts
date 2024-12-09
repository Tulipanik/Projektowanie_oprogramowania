import { Dispatch } from "react";
import { UpdateCateringCompanyViewAction } from "../../view_model/CateringCompany";

export class CateringCompanyPresentationDispatcher {
  cateringCompanyDispatch!: Dispatch<UpdateCateringCompanyViewAction>;

  injectCateringCompanyDispatch(
    dispatch: Dispatch<UpdateCateringCompanyViewAction>
  ) {
    this.cateringCompanyDispatch = dispatch;
  }
}
