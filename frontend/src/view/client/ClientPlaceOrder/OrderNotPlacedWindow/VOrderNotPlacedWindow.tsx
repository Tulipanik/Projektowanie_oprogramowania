import { UCSClientPlaceOrder } from "../../../../use_cases/UCSClientPlaceOrder";
import { UCSShowClientCart } from "../../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../../use_cases/UCSShowClientWindow";
import { CClientCart } from "../../ClientCart/CClientCart";

export function VOrderNotPlacedWindow(
	isActive: boolean,
	ucsShowClientCart: UCSShowClientCart,
	ucsShowClientWindow: UCShowClientMainWindow,
	ucsShowClientDishList: UCSShowClientDishList,
	ucsClientPlaceOrder: UCSClientPlaceOrder

) {
	if (!isActive) return;

	const {
		pressShowDishListBtn,
	} = CClientCart(
		ucsShowClientCart,
		ucsShowClientWindow,
		ucsShowClientDishList,
		ucsClientPlaceOrder
	);

	return (
		<div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
			<p className="text-lg font-bold text-violet-600 mb-2 text-center">
				Your order failed in process
			</p>
			<button
					onClick={pressShowDishListBtn}
					className="px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 items-center gap-2 justify-center mb-4 text-center">
					<span className="material-icons">restaurant_menu</span>
					Show dish list
				</button>
		</div>
	);
}