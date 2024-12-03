import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { ClientViewState } from "../../../view_model/Client";
import { UCSClientPayForOrder } from "./../../../use_cases/UCSClientPayForOrder";

export function CClientPayForOrder(
	ucsClientPayForOrder: UCSClientPayForOrder,
	ucsShowClientWindow: UCShowClientMainWindow,
	state?: Pick<ClientViewState, "order">
) {
	function pressPayForOrderBtn() {
		if (state?.order?.orderId) {
			ucsClientPayForOrder.payForOrder(state.order.orderId);
		} else {
			// TODO error
		}
	}

	function pressShowClientMainWindowBtn() {
		ucsShowClientWindow.handleShowClientMainWindowBtnClick();
	}

	return {
		pressPayForOrderBtn,
		pressShowClientMainWindowBtn,
	};
}
