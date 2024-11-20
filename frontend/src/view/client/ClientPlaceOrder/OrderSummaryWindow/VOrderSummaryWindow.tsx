import { UCSClientPlaceOrder } from "../../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../../use_cases/UCSShowClientCart";
import { ClientViewState } from "../../../../view_model/Client";
import { CClientPlaceOrder } from "../CClientPlaceOrder";

export function VOrderSummaryWindow(
  isActive: boolean,
  ucsClientPlaceOrder: UCSClientPlaceOrder,
  ucsShowClientCart: UCSShowClientCart,
  state: Pick<ClientViewState, "cart" | "error" | "order">
) {
  if (!isActive) return;

  const { pressPlaceOrderBtn, pressNextBtn } = CClientPlaceOrder(
    ucsClientPlaceOrder,
    ucsShowClientCart
  );
  const { clientData, price} = state.order;

  return (
    <div className="p-4">
      <div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
        <h2 className="w-full text-4xl p-4 font-bold text-purple-600 mb-4 border-b-2">
          Order Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2 md:p-4">
          <div className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col items-start">
            <p>{clientData.name + " " + clientData.surname}</p>
            <p> {clientData.phone}</p>
            <p> {clientData.email}</p>
            <p> {clientData.street + ", " + clientData.city}</p>
            <p>
              {" "}
              Message: {clientData.comment ? clientData.comment : "No message"}
            </p>
          </div>
          <div className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col">
            <p className="border-b-2">
              {" "}
              Zamówienie: <span className="text-red-500">-{price} zł</span>{" "}
            </p>
            <p>
              {" "}
              Suma: <span className="font-bold">{price} zł</span>{" "}
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => pressPlaceOrderBtn(state.order)}
            className="w-full bg-violet-600 text-white mx-auto center py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2"
          >
            Place order
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => pressNextBtn(state?.cart)}
            className="w-full text-grey mx-auto text-center py-2 rounded-md hover:border-1 hover:border-slate-800"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
}
