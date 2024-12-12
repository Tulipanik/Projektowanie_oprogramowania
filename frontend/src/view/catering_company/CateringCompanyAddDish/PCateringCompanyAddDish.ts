import { CateringCompanyScreenId } from "../../../view_model/CateringCompany";
import { CateringCompanyPresentationDispatcher } from "../CateringCompanyPresentationDispatcher";

export class PCateringCompanyAddDish extends CateringCompanyPresentationDispatcher {
  showDishAddedWindow() {
    this.cateringCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CateringCompanyScreenId.ADD_DISH_SUCCESS,
    });
  }

  showDishNotAddedWindow() {
    this.cateringCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CateringCompanyScreenId.ADD_DISH_FAIL,
    });
  }
}
