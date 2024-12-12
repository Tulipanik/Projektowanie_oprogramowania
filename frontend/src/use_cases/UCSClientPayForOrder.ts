import { IOrderAPi } from "../services/IOrder";
import { PClientPayForOrder } from "../view/client/ClientPayForOrder/PClientPayForOrder";

export class UCSClientPayForOrder {
	constructor(
		private pClientPayForOrder: PClientPayForOrder,
		private orderApi: IOrderAPi
	) {}

	async payForOrder(orderId: number) {
		return await this.orderApi.payForOrder(orderId).then((status) => {
			if (status) {
				this.pClientPayForOrder.showOrderPaidWindow();
			} else {
				this.pClientPayForOrder.showOrderNotPaidWindow();
			}
		});
	}
}
