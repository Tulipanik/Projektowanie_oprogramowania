import { MOCK_FIND_DISH_DTO } from "../mock/findDishDto.mock";
import { FindDishDTO, OrderDishDTO } from "../view_model/Dish";
import { AuthorizationConst } from "./AuthorizationConst";
import { DishesProxy } from "./IDishes";

export interface ICartApi {
	tempCart: OrderDishDTO[];
	addDishToCart(cartId: number, dishId: number): Promise<OrderDishDTO[]>;
	removeDishFromCart(cartId: number, dishId: number): Promise<OrderDishDTO[]>;
	getCart(cartId: number): Promise<OrderDishDTO[]>;
	updateCartDishDate(
		dishToUpdate: FindDishDTO,
		dateToUpdate: Date
	): Promise<boolean>;
}

export class CartProxy implements ICartApi {
	tempCart: OrderDishDTO[] = [];

	async addDishToCart(cartId: number, dishId: number): Promise<OrderDishDTO[]> {
		let dishApi = new DishesProxy();
		let dishToAdd = (await dishApi.getDishList(1, null)).filter(
			(dish) => dish.dishId === dishId
		)[0];
		this.tempCart.push({
			dish: dishToAdd,
			date: null,
		});
		let url = `http://localhost:8080/api/v1/cart/1/dishes/${dishId}`;
		try {
			let response = await fetch(url, {
				method: "POST",
				headers: {
					accept: "*/*",
					"Content-Type": "application/json",
					Authorization: `Bearer ${AuthorizationConst.token}`,
				},
			});
			if (response.status === 200)
				return new Promise((resolve, reject) => {
					resolve(this.tempCart);
				});

			return new Promise((resolve, reject) => {
				resolve(this.tempCart);
			});
		} catch (error) {
			return new Promise((resolve, reject) => {
				resolve(this.tempCart);
			});
		}
	}

	removeDishFromCart(cartId: number, dishId: number): Promise<OrderDishDTO[]> {
		this.tempCart.splice(dishId, 1);
		return new Promise((resolve, reject) => {
			resolve(this.tempCart);
		});
	}

	getCart(cartId: number): Promise<OrderDishDTO[]> {
		return new Promise((resolve, reject) => {
			resolve(this.tempCart);
		});
	}

	updateCartDishDate(dishToUpdate: FindDishDTO, dateToUpdate: Date) {
		if (dateToUpdate > new Date()) {
			this.tempCart = this.tempCart.filter(
				(item) => item.dish.dishId !== dishToUpdate.dishId
			);
			if (dishToUpdate) {
				this.tempCart = [
					...this.tempCart,
					{ dish: dishToUpdate, date: dateToUpdate },
				];
			}
			return new Promise<boolean>((resolve, reject) => {
				resolve(true);
			});
		} else {
			return new Promise<boolean>((resolve, reject) => {
				resolve(false);
			});
		}
	}
}
