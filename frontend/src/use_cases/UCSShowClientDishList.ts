import { ICartApi } from "../services/ICart";
import { PClientDishes } from "../view/client/ClientDishes/PClientDishes";
import { DishViewFilters } from "../view_model/Client";
import { mealType } from "../view_model/Dish";
import { filtrDTO, SortingKey } from "../view_model/Filtr";
import { IDishesApi } from "./../services/IDishes";

export class UCSShowClientDishList {
	constructor(
		private pClientDishes: PClientDishes,
		private dishesApi: IDishesApi,
		private cartApi: ICartApi
	) { }

	async handleShowClientDishesBtnClick(): Promise<void> {
		return await this.dishesApi.getDishList(1, null).then((dishes) => {
			this.pClientDishes.showDishList(dishes);
		});
	}

	async handleUpdateFiltersBtnClick(filters: DishViewFilters): Promise<void> {
		this.pClientDishes.updateFilters(filters);
		return await this.dishesApi.getDishList(1, DishViewFilters.isEmpty(filters) ? null : this.getFilterDto(filters)).then((dishes) => {
			this.pClientDishes.showDishList(dishes);
		});
	}

	async addDishToCart(dishId: number) {
		return await this.cartApi.addDishToCart(1, dishId).then((dishes) => {
			this.pClientDishes.addDishToCart(dishes);
		});
	}

	showClientMainWindow() {
		this.pClientDishes.showClientMainWindow();
	}

	private getFilterDto(filters: DishViewFilters): filtrDTO {
		const filterDto: filtrDTO = {};

		if (filters.companyName && filters.companyName !== "") {
			filterDto.companyName = { values: [filters.companyName] };
		}
		if (filters.kitchenType && filters.kitchenType !== "") {
			filterDto.kitchenType = { values: [filters.kitchenType] };
		}
		if (filters.mealType && filters.mealType !== "") {
			filterDto.mealType = { values: [filters.mealType as mealType] };
		}
		if (filters.sortingKey) {
			filterDto.sortingKey = filters.sortingKey as SortingKey;
		}
		if (filters.sortingType) {
			filterDto.sorting = filters.sortingType;
		}

		return filterDto;
	}
}
