import { useReducer } from "react";
import { UCShowCateringCompanyMainWindow } from "../../../use_cases/UCSShowCateringCompanyMainWindow";
import { PCateringCompanyMainWindow } from "./PCateringCompanyMainWindow";
import { updateCateringCompanyViewState } from "./CCateringCompanyMainWindow";
import {
  CateringCompanyScreenId,
  CateringCompanyViewState,
} from "../../../view_model/CateringCompany";
import { VCateringCompanyMenu } from "../CateringCompanyMenu/VCateringCompanyMenu";
import { DishesProxy, IDishesApi } from "../../../services/IDishes";
import { UCCateringCompanyAddNewDish } from "../../../use_cases/UCSCourierCateringAddNewDish";
import { PCateringCompanyDishes } from "../CateringCompanyDishes/PCateringCompanyDishes";
import { VCateringCompanyDishes } from "../CateringCompanyDishes/VCateringCompanyDishes";
import { VCateringCompanyAddDish } from "../CateringCompanyAddDish/VCateringCompanyAddDish";
import { VCateringCompanyAddDishSuccessWindow } from "../CateringCompanyAddDish/CourierCompanyAddDishSuccessWindow/VCateringCompanyAddDishSuccessWindow";
import { VCateringCompanyAddDishFailWindow } from "../CateringCompanyAddDish/CateringCompanyAddDishFailWindow/VCateringCompanyAddDishFailWindow";
import { PCateringCompanyAddDish } from "../CateringCompanyAddDish/PCateringCompanyAddDish";

const pCateringCompanyDishes = new PCateringCompanyDishes();
const pCateringCompanyAddDish = new PCateringCompanyAddDish();
const iDishes: IDishesApi = new DishesProxy();
const ucsCateringCompanyAddNewDish = new UCCateringCompanyAddNewDish(
  pCateringCompanyDishes,
  pCateringCompanyAddDish,
  iDishes
);

export function VCateringCompanyMainWindow(
  isActive: boolean,
  ucshowCateringCompanyMainWindow: UCShowCateringCompanyMainWindow,
  pCateringCompanyMainWindow: PCateringCompanyMainWindow
) {
  const [cateringCompanyState, cateringCompanyStateUpdate] = useReducer(
    updateCateringCompanyViewState,
    new CateringCompanyViewState()
  );

  if (!isActive) return;

  pCateringCompanyDishes.injectCateringCompanyDispatch(
    cateringCompanyStateUpdate
  );
  pCateringCompanyAddDish.injectCateringCompanyDispatch(
    cateringCompanyStateUpdate
  );
  pCateringCompanyMainWindow.injectCateringCompanyDispatch(
    cateringCompanyStateUpdate
  );
  return (
    <div>
      {VCateringCompanyMenu(
        cateringCompanyState.screen === CateringCompanyScreenId.MAIN_WINDOW,
        ucshowCateringCompanyMainWindow,
        ucsCateringCompanyAddNewDish
      )}
      {VCateringCompanyDishes(
        cateringCompanyState.screen === CateringCompanyScreenId.OFFER,
        ucshowCateringCompanyMainWindow,
        ucsCateringCompanyAddNewDish,
        { offer: cateringCompanyState.offer }
      )}
      {VCateringCompanyAddDish(
        cateringCompanyState.screen === CateringCompanyScreenId.ADD_DISH,
        ucsCateringCompanyAddNewDish
      )}
      {VCateringCompanyAddDishSuccessWindow(
        cateringCompanyState.screen === CateringCompanyScreenId.ADD_DISH_SUCCESS,
        ucsCateringCompanyAddNewDish
      )}
      {VCateringCompanyAddDishFailWindow(
        cateringCompanyState.screen === CateringCompanyScreenId.ADD_DISH_FAIL,
        ucsCateringCompanyAddNewDish
      )}
    </div>
  );
}
