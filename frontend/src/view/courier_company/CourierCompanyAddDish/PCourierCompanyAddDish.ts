import { CourierCompanyScreenId } from "../../../view_model/CourierCompany";
import { CourierCompanyPresentationDispatcher } from "../CourierCompanyPresentationDispatcher";

export class PCourierCompanyAddDish extends CourierCompanyPresentationDispatcher {
  showDishAddedWindow() {
    this.courierCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CourierCompanyScreenId.ADD_DISH_SUCCESS,
    });
  }

  showDishNotAddedWindow() {
    this.courierCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CourierCompanyScreenId.ADD_DISH_FAIL,
    });
  }
}
