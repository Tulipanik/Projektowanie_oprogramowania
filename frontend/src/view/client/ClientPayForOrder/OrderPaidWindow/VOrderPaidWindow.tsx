import { UCSClientPayForOrder } from "../../../../use_cases/UCSClientPayForOrder";
import { UCShowClientMainWindow } from "../../../../use_cases/UCSShowClientWindow";
import { CClientPayForOrder } from "../CClientPayForOrder";

export function VOrderPaidWindow(
	isActive: boolean,
	ucsShowClientWindow: UCShowClientMainWindow,
	ucsClientPayForOrder: UCSClientPayForOrder
) {
	if (!isActive) return;

	const { pressShowClientMainWindowBtn } = CClientPayForOrder(
		ucsClientPayForOrder,
		ucsShowClientWindow
	);

	return (
		<div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
			<p className="text-lg font-bold text-violet-600 mb-2 text-center">
				Payment successful!
			</p>
			<button
				onClick={pressShowClientMainWindowBtn}
				className="px-6 py-3 mb-4 bg-violet-600 text-white rounded-md hover:bg-violet-700 flex flex-row items-center gap-2 justify-center text-center justify-self-center	">
				<span className="material-icons">restaurant_menu</span>
				Show main window
			</button>
		</div>
	);
}
