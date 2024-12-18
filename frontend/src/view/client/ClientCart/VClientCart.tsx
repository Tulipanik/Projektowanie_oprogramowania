import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { ClientViewState } from "../../../view_model/Client";
import { CClientPlaceOrder } from "../ClientPlaceOrder/CClientPlaceOrder";
import { CClientCart } from "./CClientCart";
import { ClientCartList } from "./ui/ClientCartList";

export function VClientCart(
  isActive: boolean,
  ucsShowClientCart: UCSShowClientCart,
  ucsShowClientWindow: UCShowClientMainWindow,
  ucsShowClientDishList: UCSShowClientDishList,
  ucsClientPlaceOrder: UCSClientPlaceOrder,
  state: Pick<ClientViewState, "cart" | "error">
) {
  if (!isActive) return;

  const {
    pressShowClientMainWindowBtn,
    pressRemoveFromCartBtn,
    pressShowDishListBtn,
    setCartDishDate,
  } = CClientCart(
    ucsShowClientCart,
    ucsShowClientWindow,
    ucsShowClientDishList,
    ucsClientPlaceOrder
  );

  const { pressNextBtn } = CClientPlaceOrder(
    ucsClientPlaceOrder,
    ucsShowClientCart
  );

  return (
    <div className="p-4">
      <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={pressShowClientMainWindowBtn}
            className="flex items-center text-indigo-400 hover:text-indigo-500"
          >
            <span className="material-icons">arrow_back</span>
          </button>
          <h1 className="text-2xl font-bold text-violet-500">Cart</h1>
        </div>
        <button
          onClick={pressShowDishListBtn}
          className="px-6 py-3 mb-4 bg-violet-600 text-white rounded-md hover:bg-violet-700 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">restaurant_menu</span>
          Show dish list
        </button>
      </div>
      {ClientCartList(
        state?.cart,
        state?.error,
        pressRemoveFromCartBtn,
        pressNextBtn,
        setCartDishDate
      )}
    </div>
  );
}
