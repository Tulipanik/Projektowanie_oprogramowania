import { UCSClientPlaceOrder } from "../../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../../use_cases/UCSShowClientWindow";
import { CClientCart } from "../../ClientCart/CClientCart";

export function showOrderPlacedWindow(isActive: boolean) {
  if (!isActive) return;

  return (
    <div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
      <p className="text-lg font-bold text-violet-600 mb-2 text-center">
        Your order has been saved
      </p>
      <button
        onClick={() => alert("TODO: implemetnacja przejscia do platnosci")}
        className="px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 mb-4 text-center"
      >
        <div className="flex justify-center items-center gap-2">
          <span className="material-icons">restaurant_menu</span>
          Pay for order
        </div>
      </button>
    </div>
  );
}
