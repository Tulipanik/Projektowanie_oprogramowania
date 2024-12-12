import { Dispatch } from "react";
import { UpdateClientViewAction } from "../../view_model/Client";

export class ClientPresentationDispatcher {
  clientDispatch!: Dispatch<UpdateClientViewAction>;

  injectClientDispatch(dispatch: Dispatch<UpdateClientViewAction>) {
    this.clientDispatch = dispatch;
  }
}