import { useReducer } from "react";
import { DishesProxy, IDishesApi } from "../../../services/IDishes";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { ClientScreenId, ClientViewState } from "../../../view_model/Client";
import { PClientDishes } from "../ClientDishes/PClientDishes";
import { VClientMenu } from "../ClientMenu/VClientMenu";
import { updateClientViewState } from "./CClientMainWindow";
import { PClientMainWindow } from "./PClientMainWindow";
import { VClientDishes } from "../ClientDishes/VClientDishes";


const pClientDishes = new PClientDishes();
const iDishes: IDishesApi = new DishesProxy();
const ucsShowClientDishList = new UCSShowClientDishList(pClientDishes, iDishes);

export function VClientMainWindow(
  isActive: boolean,
  pClientMainWindow: PClientMainWindow,
) {

  const [clientState, clienStateUpdate] = useReducer(updateClientViewState, new ClientViewState());

  if (!isActive) return;

  pClientDishes.injectClientDispatch(clienStateUpdate);


  return (
    <div>
      {VClientMenu(clientState.screen === ClientScreenId.MAIN_WINDOW, pClientMainWindow, ucsShowClientDishList)}
      {VClientDishes(clientState.screen === ClientScreenId.DISHES, ucsShowClientDishList)}
    </div>
  )

}