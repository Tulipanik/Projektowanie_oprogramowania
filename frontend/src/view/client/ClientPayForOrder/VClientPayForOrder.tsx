import { UCSClientPayForOrder } from "../../../use_cases/UCSClientPayForOrder";
import { CClientPayForOrder } from "./CClientPayForOrder";
import { ClientViewState } from "../../../view_model/Client";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";

export function VClientPayForOrder(
	isActive: boolean,
	ucsClientPayForOrder: UCSClientPayForOrder,
	ucsShowClientWindow: UCShowClientMainWindow,
	state: Pick<ClientViewState, "order">
) {
	if (!isActive) return;

	const { pressPayForOrderBtn } = CClientPayForOrder(
		ucsClientPayForOrder,
		ucsShowClientWindow,
		state
	);

	return (
		<div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
			<p className="text-lg font-bold text-violet-600 mb-2 text-center">
				Your order has been saved
			</p>
			<button
				onClick={pressPayForOrderBtn}
				className="px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 mb-4 text-center">
				<div className="flex justify-center items-center gap-2">
					<span className="material-icons">savings</span>
					Pay for order
				</div>
			</button>
		</div>
	);
}
