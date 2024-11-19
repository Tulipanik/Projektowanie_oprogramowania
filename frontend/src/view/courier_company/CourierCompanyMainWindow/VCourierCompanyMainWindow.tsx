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
import { UCCourierCompanyAddNewDish } from "../../../use_cases/UCSCourierCompanyAddNewDish";
import { PCourierCompanyDishes } from "../CourierCompanyDishes/PCourierCompanyDishes";
import { VCourierCompanyDishes } from "../CourierCompanyDishes/VCourierCompanyDishes";
import { VCourierCompanyAddDish } from "../CourierCompanyAddDish/VCourierCompanyAddDish";
import { VCourierCompanyAddDishSuccessWindow } from "../CourierCompanyAddDish/CourierCompanyAddDishSuccessWindow/VCourierCompanyAddDishSuccessWindow";
import { VCourierCompanyAddDishFailWindow } from "../CourierCompanyAddDish/CourierCompanyAddDishFailWindow/VCourierCompanyAddDishFailWindow";

const pCourierCompanyDishes = new PCourierCompanyDishes();
const iDishes: IDishesApi = new DishesProxy();
const ucsCourierCompanyAddNewDish = new UCCourierCompanyAddNewDish(
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
        ucsCourierCompanyAddNewDish
      )}
      {VCourierCompanyDishes(
        courierCompanyState.screen === CourierCompanyScreenId.OFFER,
        ucshowCourierCompanyMainWindow,
        ucsCourierCompanyAddNewDish,
        { offer: courierCompanyState.offer }
      )}
      {VCourierCompanyAddDish(
        courierCompanyState.screen === CourierCompanyScreenId.ADD_DISH,
        ucshowCourierCompanyMainWindow,
        ucsCourierCompanyAddNewDish
      )}
      {VCourierCompanyAddDishSuccessWindow(
        courierCompanyState.screen === CourierCompanyScreenId.ADD_DISH_SUCCESS,
        ucsCourierCompanyAddNewDish,
        ucshowCourierCompanyMainWindow
      )}
      {VCourierCompanyAddDishFailWindow(
        courierCompanyState.screen === CourierCompanyScreenId.ADD_DISH_FAIL,
        ucsCourierCompanyAddNewDish,
        ucshowCourierCompanyMainWindow
      )}
    </div>
  );
}
