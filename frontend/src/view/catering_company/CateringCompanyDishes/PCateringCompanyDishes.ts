import { CateringCompanyScreenId } from "../../../view_model/CateringCompany";
import { FindDishDTO } from "../../../view_model/Dish";
import { CateringCompanyPresentationDispatcher } from "../CateringCompanyPresentationDispatcher";

export class PCateringCompanyDishes extends CateringCompanyPresentationDispatcher {
  showDishList(dishList: FindDishDTO[]) {
    this.cateringCompanyDispatch?.({
      type: "UPDATE_OFFER",
      offer: dishList,
    });
    this.cateringCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CateringCompanyScreenId.OFFER,
    });
  }

  showAddDishWindow() {
    this.cateringCompanyDispatch?.({
      type: "CHANGE_SCREEN",
      screen: CateringCompanyScreenId.ADD_DISH,
    });
  }
}
