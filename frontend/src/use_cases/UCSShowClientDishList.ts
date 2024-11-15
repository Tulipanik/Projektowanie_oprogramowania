import { ICartApi } from "../services/ICart";
import { PClientDishes } from "../view/client/ClientDishes/PClientDishes";
import { DishViewFilters } from "../view_model/Client";
import { IDishesApi } from "./../services/IDishes";

export class UCSShowClientDishList {
	constructor(
		private pClientDishes: PClientDishes,
		private dishesApi: IDishesApi,
		private cartApi: ICartApi
	) {}

	async showClientDishes(): Promise<void> {
		return await this.dishesApi.getDishList(1, []).then((dishes) => {
			this.pClientDishes.showDishList(dishes);
		});
	}

	async updateFilters(filters: DishViewFilters): Promise<void> {
		this.pClientDishes.updateFilters(filters);
		return await this.dishesApi.getDishList(1, []).then((dishes) => {
			this.pClientDishes.showDishList(dishes);
		});
	}

	async addDishToCart(dishId: number) {
		return await this.cartApi.addDishToCart(1, dishId).then((dishes) => {
			this.pClientDishes.addDishToCart(dishes); //TODO dorobić wyskakujący form z podaniem daty (uc47)
		});
	}

	showClientMainWindow() {
		this.pClientDishes.showClientMainWindow();
	}
}
