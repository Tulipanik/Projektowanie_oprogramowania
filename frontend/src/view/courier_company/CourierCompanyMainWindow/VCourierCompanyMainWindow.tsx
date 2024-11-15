import { useEffect, useReducer } from "react";
import { UCShowCourierCompanyMainWindow } from "../../../use_cases/UCSShowCourierCompanyMainWindow";
import { PCourierCompanyMainWindow } from "./PCourierCompanyMainWindow";
import { updateCourierCompanyViewState } from "./CCourierCompanyMainWindow";
import {
  CourierCompanyScreenId,
  CourierCompanyViewState,
} from "../../../view_model/CourierCompany";
import { VCourierCompanyMenu } from "../CourierCompanyMenu/VCourierCompanyMenu";
import { DishesProxy, IDishesApi } from "../../../services/IDishes";
import { UCShowCourierCompanyDishesList } from "../../../use_cases/UCSShowCourierCompanyDishesList";
import { PCourierCompanyDishes } from "../CourierCompanyDishes/PCourierCompanyDishes";
import { VCourierCompanyDishes } from "../CourierCompanyDishes/VCourierCompanyDishes";
import { VCourierCompanyAddDish } from "../CourierCompanyAddDish/VCourierCompanyAddDish";
import { VCourierCompanyAddDishSuccessWindow } from "../CourierCompanyAddDish/CourierCompanyAddDishSuccessWindow/VCourierCompanyAddDishSuccessWindow";
import { VCourierCompanyAddDishFailWindow } from "../CourierCompanyAddDish/CourierCompanyAddDishFailWindow/VCourierCompanyAddDishFailWindow";

const pCourierCompanyDishes = new PCourierCompanyDishes();
const iDishes: IDishesApi = new DishesProxy();
const ucsShowCourierCompanyDishesList = new UCShowCourierCompanyDishesList(
  pCourierCompanyDishes,
  iDishes
);

export function VCourierCompanyMainWindow(
  isActive: boolean,
  ucshowCourierCompanyMainWindow: UCShowCourierCompanyMainWindow,
  pCourierCompanyMainWindow: PCourierCompanyMainWindow
) {
  const [courierCompanyState, courierCompanyStateUpdate] = useReducer(
    updateCourierCompanyViewState,
    new CourierCompanyViewState()
  );

  if (!isActive) return;

  pCourierCompanyDishes.injectCourierCompanyDispatch(courierCompanyStateUpdate);
  pCourierCompanyMainWindow.injectCourierCompanyDispatch(
    courierCompanyStateUpdate
  );
  return (
    <div>
      {VCourierCompanyMenu(
        courierCompanyState.screen === CourierCompanyScreenId.MAIN_WINDOW,
        ucshowCourierCompanyMainWindow,
        ucsShowCourierCompanyDishesList
      )}
      {VCourierCompanyDishes(
        courierCompanyState.screen === CourierCompanyScreenId.OFFER,
        ucshowCourierCompanyMainWindow,
        ucsShowCourierCompanyDishesList,
        { offer: courierCompanyState.offer }
      )}
      {VCourierCompanyAddDish(
        courierCompanyState.screen === CourierCompanyScreenId.ADD_DISH,
        ucshowCourierCompanyMainWindow,
        ucsShowCourierCompanyDishesList
      )}
      {VCourierCompanyAddDishSuccessWindow(
        courierCompanyState.screen === CourierCompanyScreenId.ADD_DISH_SUCCESS,
        ucsShowCourierCompanyDishesList,
        ucshowCourierCompanyMainWindow
      )}
      {VCourierCompanyAddDishFailWindow(
        courierCompanyState.screen === CourierCompanyScreenId.ADD_DISH_FAIL,
        ucsShowCourierCompanyDishesList,
        ucshowCourierCompanyMainWindow
      )}
    </div>
  );
}
