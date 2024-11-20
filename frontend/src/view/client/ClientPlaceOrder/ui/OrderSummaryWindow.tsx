import { UCSClientPlaceOrder } from "../../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../../use_cases/UCSShowClientWindow";
import { ClientViewState } from "../../../../view_model/Client";
import { CClientCart } from "../../ClientCart/CClientCart";
import { CClientPlaceOrder } from "../CClientPlaceOrder";

export function showOrderSummaryWindow(
    isActive: boolean,
    ucsClientPlaceOrder: UCSClientPlaceOrder,
    ucsShowClientCart: UCSShowClientCart,
    ucsShowClientWindow: UCShowClientMainWindow,
    ucsShowClientDishList: UCSShowClientDishList,
    state: Pick<ClientViewState, "cart" | "error">
) {
    if (!isActive) return;

    const {
        pressPlaceOrderBtn
    } = CClientPlaceOrder(ucsClientPlaceOrder, ucsShowClientCart);

    const {
        pressNextBtn
    } = CClientCart(ucsShowClientCart, ucsShowClientWindow, ucsShowClientDishList, ucsClientPlaceOrder);

    return (
        <div className="p-4">
            <div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
                <h2 className="w-full text-4xl p-4 font-bold text-purple-600 mb-4 border-b-2">Order Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2 md:p-4">
                    <div className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col items-start">
                        <p> Imie i nazwisko joł</p>
                        <p> +48 123 456 789</p>
                        <p> adres@email.com</p>
                        <p> ul. Malopolska 69/420</p>
                        <p> Info dla kuriera</p>
                    </div>
                    <div className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col">
                        <p> Zamówienie </p>
                        <p className="border-b-2"> Skarbonka </p>
                        <p> Suma </p>
                    </div>
                </div>
                <div>
                    <button type="button" onClick={pressPlaceOrderBtn} className="w-full bg-violet-600 text-white mx-auto center py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2">
                        Place order
                    </button>
                </div>
                <div>
                    <button type="button" onClick={() => pressNextBtn(state?.cart)} className="w-full bg-white border-slate-950 text-grey mx-auto center py-2 rounded-md hover:border-1 flex items-center flex-row justify-center gap-2">
                        Return
                    </button>
                </div>
            </div>
        </div>
    );
}