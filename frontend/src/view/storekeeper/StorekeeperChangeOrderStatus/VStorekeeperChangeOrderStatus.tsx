import { UCShowStorekeeperMainWindow } from "../../../use_cases/UCShowStorekeeperMainWindow";
import { UCStorekeeperChangeOrderStatus } from "../../../use_cases/UCStorekeeperChangeOrderStatus";
import { orderStatus } from "../../../view_model/Order";
import { StorekeeperViewState } from "../../../view_model/Storekeeper";
import { CStorekeeperChangeOrderStatus } from "./CStorekeeperChangeOrderStatus";

export function VStorekeeperChangeOrderStatus(
    isActive: boolean,
    state: Pick<StorekeeperViewState, "orderList">,
    ucShowStorekeeperMainWindow: UCShowStorekeeperMainWindow,
    ucStorekeeperChangeOrderStatus: UCStorekeeperChangeOrderStatus
){
    if (!isActive) return;

    const { pressShowStorekeeperMainWindowBtn, pressChangeOrderStatusBtn } = CStorekeeperChangeOrderStatus(
        ucShowStorekeeperMainWindow, ucStorekeeperChangeOrderStatus
    );

    return (
        <div>
          <div className="flex flex-col">
            <div className="flex justify-between w-screen">
              <button
                onClick={pressShowStorekeeperMainWindowBtn}
                className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
              >
                <span className="material-icons">arrow_back</span>
                <h2 className="text-2xl font-semibold">Back</h2>
              </button>
            </div>
            <div className="flex w-screen items-center justify-center">
              <h1 className="text-4xl font-bold text-violet-400 p-4">My Orders</h1>
            </div>
          </div>
          {state.orderList.length === 0 && <div>No orders</div>}
          {state.orderList.length !== 0 &&
            state.orderList.map((order) => (
              <div key={order.orderId} className="border border-gray-200 p-4 mb-4">
                <h2 className="text-xl font-bold text-violet-500">
                  Order #{order.orderId}
                </h2>
                <p className="text-gray-500">
                  Status: <span className="font-bold">{order.status}</span>
                </p>
                <p className="text-gray-500">Total: ${order.price}</p>
                <button
                  className="bg-violet-500 text-white p-2 rounded-md hover:opacity-80"
                  onClick={() => pressChangeOrderStatusBtn(order.orderId!, orderStatus.COMPLETION_IN_PROGRESS)}
                >
                  Change order status to completion in progress
                </button>
              </div>
            ))}
        </div>
      );
}