import { useReducer } from "react";
import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";
import { StorekeeperScreenId, StorekeeperViewState } from "../../../view_model/Storekeeper";
import { updateStorekeeperViewState } from "./CStorekeeperMainWindow";
import { PStorekeeperMainWindow } from "./PStorekeeperMainWindow";
import { VStorekeeperMenu } from "../StorekeeperMenu/VStorekeeperMenu";
import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";
import { PStorekeeperChangeOrderStatus } from "../StorekeeperChangeOrderStatus/PStorekeeperChangeOrderStatus";
import { IOrderAPi, OrderProxy } from "../../../services/IOrder";
import { VStorekeeperChangeStatusSuccessWindow } from "../StorekeeperChangeStatusSuccessWindow/VStorekeeperChangeStatusSuccessWindow";
import { VStorekeeperChangeStatusFailWindow } from "../StorekeeperChangeStatusFailWindow/VStorekeeperChangeStatusFailWindow";
import { VStorekeeperChangeOrderStatus } from "../StorekeeperChangeOrderStatus/VStorekeeperChangeOrderStatus";

const pStorekeeperMainWindow = new PStorekeeperMainWindow();
const pStorekeeperChangeOrderStatus = new PStorekeeperChangeOrderStatus();
const orderApi: IOrderAPi = new OrderProxy();
const ucStorekeeperChangeOrderStatus = new UCStorekeeperChangeOrderStatus(
  pStorekeeperChangeOrderStatus,
  pStorekeeperMainWindow,
  orderApi
);

export function VStorekeeperMainWindow(
  isActive: boolean,
  ucShowStorekeeperMainWindow: UCShowStorekeeperMainWindow,
  pStorekeeperMainWindow: PStorekeeperMainWindow
) {
  const [storekeeperState, storekeeperStateUpdate] = useReducer(
    updateStorekeeperViewState,
    new StorekeeperViewState()
  );

  if (!isActive) return;

  pStorekeeperMainWindow.injectStorekeeperDispatch(
    storekeeperStateUpdate
  );

  pStorekeeperChangeOrderStatus.injectStorekeeperDispatch(
    storekeeperStateUpdate
  )

  
  return (
    <div>
      {VStorekeeperMenu(
        storekeeperState.screen === StorekeeperScreenId.MAIN_WINDOW,
        ucShowStorekeeperMainWindow,
        ucStorekeeperChangeOrderStatus
      )}
      {VStorekeeperChangeStatusSuccessWindow(
        storekeeperState.screen === StorekeeperScreenId.STATUS_CHANGE_SUCCESS,
        ucShowStorekeeperMainWindow
      )}
      {VStorekeeperChangeStatusFailWindow(
        storekeeperState.screen === StorekeeperScreenId.STATUS_CHANGE_FAIL,
        ucStorekeeperChangeOrderStatus
      )}
      {VStorekeeperChangeOrderStatus(
        storekeeperState.screen === StorekeeperScreenId.CHANGE_ORDER_STATUS_LIST,
        {
          orderList: storekeeperState.orderList,
        },
        ucShowStorekeeperMainWindow,
        ucStorekeeperChangeOrderStatus
      )}
    </div>
  );
}