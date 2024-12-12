import { Dispatch } from "react";
import { UpdateStorekeeperViewAction } from "../../view_model/Storekeeper";

export class StorekeeperPresentationDispatcher {
  storekeeperDispatch!: Dispatch<UpdateStorekeeperViewAction>;

  injectStorekeeperDispatch(dispatch: Dispatch<UpdateStorekeeperViewAction>) {
    this.storekeeperDispatch = dispatch;
  }
}