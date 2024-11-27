import { ClientPresentationDispatcher } from "../ClientPresentationDispatcher";
import { ClientScreenId } from "../../../view_model/Client";

export class PClientPayForOrder extends ClientPresentationDispatcher {
	showOrderPaidWindow() {
		this.clientDispatch?.({
			type: "CHANGE_SCREEN",
			screen: ClientScreenId.PAY_ORDER_SUCCESS,
		});
	}

	showOrderNotPaidWindow() {
		this.clientDispatch?.({
			type: "CHANGE_SCREEN",
			screen: ClientScreenId.PAY_ORDER_FAIL,
		});
	}
}
