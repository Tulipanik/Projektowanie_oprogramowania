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

  showAddressFormWindow() {
    this.clientDispatch?.({ 
      type: "CHANGE_SCREEN", 
      screen: ClientScreenId.ADDRESS_FORM 
    }); 
  }

  showOrderPlacedWindow() {
    this.clientDispatch?.({ 
      type: "CHANGE_SCREEN", 
      screen: ClientScreenId.PLACE_ORDER_SUCESS, 
    }); 
  }

  showOrderNotPlacedWindow() {
    this.clientDispatch?.({ 
      type: "CHANGE_SCREEN", 
      screen: ClientScreenId.PLACE_ORDER_FAIL, 
    }); 
  }

  showOrderSummaryWindow() {
    this.clientDispatch?.({ 
      type: "CHANGE_SCREEN", 
      screen: ClientScreenId.ORDER_SUMMARY, 
    }); 
  }
}
