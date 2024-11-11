import { MOCK_FIND_DISH_DTO } from "../mock/findDishDto.mock";
import { FindDishDTO, OrderDishDTO } from "../view_model/Dish";

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
	tempCart: OrderDishDTO[] = []; //TODO wywalić i brać z backendu

	addDishToCart(cartId: number, dishId: number): Promise<OrderDishDTO[]> {
		let dishToAdd = MOCK_FIND_DISH_DTO.filter(
			(dish) => dish.dishId === dishId
		)[0];
		if (!this.tempCart.find((item) => item.dish.dishId === dishToAdd.dishId)) {
			this.tempCart.push({
				dish: dishToAdd,
				date: null,
			});
		}
		return new Promise((resolve, reject) => {
			resolve(this.tempCart);
		});
	}

	removeDishFromCart(cartId: number, dishId: number): Promise<OrderDishDTO[]> {
		this.tempCart = this.tempCart.filter((item) => item.dish.dishId !== dishId);
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
			return new Promise<boolean>((resolve, reject) => {resolve(true)});
		} else {
			return new Promise<boolean>((resolve, reject) => {resolve(false)});
		}
	}
}
