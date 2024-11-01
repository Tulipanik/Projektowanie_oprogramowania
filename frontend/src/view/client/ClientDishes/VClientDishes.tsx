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
  state: Pick<ClientViewState, "dishes" | "filters">
) {

  if (!isActive) return;

  const { showClientMainWindow, updateFilters, addToCart, clearFilters } = CClientDishes(ucsShowClientDishList, ucsShowClientWindow,);

  return (
    <div className="p-4">
      <div className="flex flex-row items-center justify-start mb-4">
        <button onClick={showClientMainWindow} className="flex items-center text-indigo-400 hover:text-indigo-500">
          <span className="material-icons">arrow_back</span>
        </button>
        <h1 className="text-2xl font-bold text-violet-500">Dish list</h1>
      </div>
      {ClientDishesForm(state?.filters, updateFilters, clearFilters)}
      {ClientDishesList(state?.dishes, addToCart)}
    </div>
  )

}