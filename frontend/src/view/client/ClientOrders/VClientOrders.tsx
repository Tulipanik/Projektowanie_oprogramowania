import { UCShowClientOrderDetails } from "../../../use_cases/UCSShowClientOrderDetails";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { ClientViewState } from "../../../view_model/Client";
import { orderStatus } from "../../../view_model/Order";
import { CClientOrders } from "./CClientOrders";

export function VClientOrders(
  isActive: boolean,
  state: Pick<ClientViewState, "orderList">,
  ucsShowClientOrderDetails: UCShowClientOrderDetails,
  ucsShowClientMainWindow: UCShowClientMainWindow
) {
  if (!isActive) return;

  const { pressShowClientMainWindowBtn, pressShowClientOrderDetailsBtn } =
    CClientOrders(ucsShowClientMainWindow, ucsShowClientOrderDetails);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between w-screen">
          <button
            onClick={pressShowClientMainWindowBtn}
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
      {state.orderList.map((order) => (
        <div key={order.orderId} className="border border-gray-200 p-4 mb-4">
          <h2 className="text-xl font-bold text-violet-500">
            Order #{order.orderId}
          </h2>
          <p className="text-gray-500">Status: {orderStatus[order.status]}</p>
          <p className="text-gray-500">Total: {order.price}</p>
          <button
            className="bg-violet-500 text-white p-2 rounded-md hover:opacity-80"
            onClick={() => pressShowClientOrderDetailsBtn(order.orderId!)}
          >
            Show details
          </button>
        </div>
      ))}
    </div>
  );
}
