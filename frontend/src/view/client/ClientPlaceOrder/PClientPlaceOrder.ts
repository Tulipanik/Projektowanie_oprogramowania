import { ClientPresentationDispatcher } from "../ClientPresentationDispatcher";
import { ClientScreenId, DishViewFilters, UpdateClientViewAction } from "../../../view_model/Client";
import { Dispatch } from "react";

export class PClientPlaceOrder extends ClientPresentationDispatcher {
  displayConfirmation(message: string) {
    console.log(message); // Wyświetlenie komunikatu w konsoli
  }

  injectClientDispatch(clientDispatch: Dispatch<UpdateClientViewAction>) {
    this.clientDispatch = clientDispatch;
  }

  showClientPlaceOrderWindow() {
    this.clientDispatch?.({ type: "CHANGE_SCREEN", screen: ClientScreenId.PLACE_ORDER }); 
  }
}
