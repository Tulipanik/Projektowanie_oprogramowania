import { PClientCart } from "../view/client/ClientCart/PClientCart";
import { FindDishDTO } from "../view_model/Dish";
import { ICartApi } from "./../services/ICart";

export class UCSShowClientCart {
	constructor(private pClientCart: PClientCart, private cartApi: ICartApi) {}

	async showClientCart(): Promise<void> {
		return await this.cartApi.getCart(1).then((dishes) => {
			this.pClientCart.showCart(dishes);
		});
	}

	async removeDishFromCart(dishId: number) {
		return await this.cartApi.removeDishFromCart(1, dishId).then((dishes) => {
			this.pClientCart.removeDishFromCart(dishes);
		});
	}

	async addDishToCart(dishId: number) {
		return await this.cartApi.addDishToCart(1, dishId).then((dishes) => {
			this.pClientCart.addDishToCart(dishes);
		});
	}

	setErrorMassage(message: string) {
		this.pClientCart.setErrorMessage(message);
	}

	async updateCartDishDate(dishToUpdate: FindDishDTO, dateToUpdate: Date) {
		return await this.cartApi
			.updateCartDishDate(dishToUpdate, dateToUpdate)
			.then((value) => {
				if (value) {
					this.pClientCart.updateCartDishDate({
						dish: dishToUpdate,
						date: dateToUpdate,
					});
				} else {
					this.setErrorMassage("All dates must be in the future!");
				}
			});
	}

	showClientMainWindow() {
		this.pClientCart.showClientMainWindow();
	}
}
