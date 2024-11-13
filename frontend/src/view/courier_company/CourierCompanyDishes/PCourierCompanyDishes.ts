import { CourierCompanyScreenId } from "../../../view_model/CourierCompany";
import { FindDishDTO } from "../../../view_model/Dish";
import { CourierCompanyPresentationDispatcher } from "../CourierCompanyPresentationDispatcher";

export class PCourierCompanyDishes extends CourierCompanyPresentationDispatcher {
  showDishList(dishList: FindDishDTO[]) {
    this.courierCompanyDispatch?.({
      type: "UPDATE_OFFER",
      offer: dishList,
    });
    this.courierCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CourierCompanyScreenId.OFFER,
    });
  }

  showAddDishWindow() {
    this.courierCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CourierCompanyScreenId.ADD_DISH,
    });
  }

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
