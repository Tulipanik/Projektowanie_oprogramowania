import { useReducer } from "react";
import { DishesProxy, IDishesApi } from "../../../services/IDishes";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { ClientScreenId, ClientViewState } from "../../../view_model/Client";
import { PClientDishes } from "../ClientDishes/PClientDishes";
import { VClientMenu } from "../ClientMenu/VClientMenu";
import { updateClientViewState } from "./CClientMainWindow";
import { PClientMainWindow } from "./PClientMainWindow";
import { VClientDishes } from "../ClientDishes/VClientDishes";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";


const pClientDishes = new PClientDishes();
const iDishes: IDishesApi = new DishesProxy();
const ucsShowClientDishList = new UCSShowClientDishList(pClientDishes, iDishes);

export function VClientMainWindow(
  isActive: boolean,
  ucshowClientMainWindow: UCShowClientMainWindow,
  pClientMainWindow: PClientMainWindow,
) {

  const [clientState, clienStateUpdate] = useReducer(updateClientViewState, new ClientViewState());

  if (!isActive) return;

  pClientDishes.injectClientDispatch(clienStateUpdate);
  pClientMainWindow.injectClientDispatch(clienStateUpdate);


  return (
    <div>
      {VClientMenu(clientState.screen === ClientScreenId.MAIN_WINDOW, ucshowClientMainWindow, ucsShowClientDishList)}
      {VClientDishes(clientState.screen === ClientScreenId.DISHES, ucsShowClientDishList, ucshowClientMainWindow, { dishes: clientState.dishes, filters: clientState.filters })}
    </div>
  )

}