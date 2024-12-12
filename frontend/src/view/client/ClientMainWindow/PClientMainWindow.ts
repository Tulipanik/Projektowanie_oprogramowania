import { Dispatch } from "react";
import { ScreenId } from "../../../view_model/Types";
import { PresentationDispatcher } from "../../PresentationDispatcher";
import { ClientScreenId, UpdateClientViewAction } from "../../../view_model/Client";


export class PClientMainWindow extends PresentationDispatcher {

  private clientDispatch?: Dispatch<UpdateClientViewAction>;

  injectClientDispatch(clientDispatch: Dispatch<UpdateClientViewAction>) {
    this.clientDispatch = clientDispatch;
  }

  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }

  showClientMainWindow() {
    this.globalUpdateView?.(ScreenId.CLIENT_MAIN_WINDOW);
    this.clientDispatch && this.clientDispatch({ type: "CHANGE_SCREEN", screen: ClientScreenId.MAIN_WINDOW });
  }

}
