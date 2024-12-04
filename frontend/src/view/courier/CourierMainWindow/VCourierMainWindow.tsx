import { useReducer } from "react";
import { IOrderAPi, OrderProxy } from "../../../services/IOrder";
import { UCSShowCourierMainWindow } from "../../../use_cases/UCSShowCourierMainWindow";
import { CourierScreenId, CourierViewState } from "../../../view_model/Courier";
import { VCourierMenu } from "../CourierMenu/VCourierMenu";
import { PCourierOrdersList } from "../CourierOrdersList/PCourierOrdersList";
import { updateCourierViewState } from "./CCourierMainWindow";
import { PCourierMainWindow } from "./PCourierMainWindow";
import { UCSShowCourierOrdersList } from "../../../use_cases/UCSShowCourierOrdersList";
import { VCourierOrdersList } from "../CourierOrdersList/VCourierOrdersList";

const IOrded: IOrderAPi = new OrderProxy();

const pCourierOrderList = new PCourierOrdersList();

const ucsShowCourierOrdersList = new UCSShowCourierOrdersList(pCourierOrderList, IOrded);

export function VCourierMainWindow(
  isActive: boolean,
  ucsShowCourierMainWindow: UCSShowCourierMainWindow,
  pCourierMainWindow: PCourierMainWindow
) {

  const [courierState, courierStateUpdate] = useReducer(
    updateCourierViewState,
    new CourierViewState()
  );

  if (!isActive) return;
  pCourierMainWindow.injectClientDispatch(courierStateUpdate);
  pCourierOrderList.injectClientDispatch(courierStateUpdate);

  return (
    <div>
      {VCourierMenu(courierState.screenId === CourierScreenId.MAIN_WINDOW,
        ucsShowCourierMainWindow,
        ucsShowCourierOrdersList,
      )}
      {VCourierOrdersList(courierState.screenId === CourierScreenId.ORDER_LIST,
        ucsShowCourierMainWindow,
        courierState.orders,
      )}
    </div>
  )
}