import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { PClientDishes } from "./PClientDishes";


export function VClientDishes(
  isActive: boolean,
  ucsShowClientDishList: UCSShowClientDishList,
) {

  if (!isActive) return;

  return (
    <div>
      XXX
    </div>
  )

}