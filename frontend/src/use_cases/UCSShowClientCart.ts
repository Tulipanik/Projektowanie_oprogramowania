import { PClientCart } from "../view/client/ClientCart/PClientCart";
import { ICartApi } from "./../services/ICart";

export class UCSShowClientCart {
	constructor(private pClientCart: PClientCart, private cartApi: ICartApi) {}

	async showClientCart(): Promise<void> {
		return await this.cartApi.getCart(1, []).then((dishes) => {
			this.pClientCart.showCart(dishes);
		});
	}

	async removeDishFromCart(dishId: number) {
		return await this.cartApi.removeDishFromCart(1, dishId).then((dishes) => {
			this.pClientCart.removeDishFromCart(dishes);
		});
	}

	showClientMainWindow() {
		this.pClientCart.showClientMainWindow();
	}
}
