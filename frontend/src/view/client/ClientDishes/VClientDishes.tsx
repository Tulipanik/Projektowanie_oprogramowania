import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { ClientViewState } from "../../../view_model/Client";
import { CClientDishes } from "./CClientDishes";
import { ClientDishesForm } from "./ui/ClientDishesForm";
import { ClientDishesList } from "./ui/ClientDishesList";

export function VClientDishes(
	isActive: boolean,
	ucsShowClientDishList: UCSShowClientDishList,
	ucsShowClientWindow: UCShowClientMainWindow,
	ucsShowClientCart: UCSShowClientCart,
	state: Pick<ClientViewState, "dishes" | "filters" | "selectOptions">,
) {
	if (!isActive) return;

	const {
		pressShowClientMainWindowBtn,
		pressUpdateFiltersBtn,
		pressAddToCartBtn,
		pressClearFiltersBtn,
		pressShowClientCartBtn,
	} = CClientDishes(ucsShowClientDishList, ucsShowClientWindow, ucsShowClientCart);

	return (
		<div className="p-4">
			<div className="flex flex-row items-center justify-between mb-4">
				<div className="flex flex-row items-center justify-center">
					<button
						onClick={pressShowClientMainWindowBtn}
						className="flex items-center text-indigo-400 hover:text-indigo-500">
						<span className="material-icons">arrow_back</span>
					</button>
					<h1 className="text-2xl font-bold text-violet-500">Dish list</h1>
				</div>
				<button
					onClick={pressShowClientCartBtn}
					className="px-6 py-3 mb-4 bg-violet-600 text-white rounded-md hover:bg-violet-700 flex flex-row items-center gap-2 justify-center">
					<span className="material-icons">shopping_cart</span>
					Show cart
				</button>
			</div>
			{ClientDishesForm(
				state?.filters,
				state?.selectOptions,
				pressUpdateFiltersBtn,
				pressClearFiltersBtn
			)}
			{ClientDishesList(state?.dishes, pressAddToCartBtn)}
		</div>
	);
}
