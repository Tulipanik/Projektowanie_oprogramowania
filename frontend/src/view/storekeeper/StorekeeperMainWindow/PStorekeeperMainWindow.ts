import { Dispatch } from "react";
import { ScreenId } from "../../../view_model/Types";
import { PresentationDispatcher } from "../../PresentationDispatcher";
import { StorekeeperScreenId, UpdateStorekeeperViewAction } from "../../../view_model/Storekeeper";


export class PStorekeeperMainWindow extends PresentationDispatcher {

  private storekeeperDispatch?: Dispatch<UpdateStorekeeperViewAction>;

  injectStorekeeperDispatch(storekeeperDispatch: Dispatch<UpdateStorekeeperViewAction>) {
    this.storekeeperDispatch = storekeeperDispatch;
  }

  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }

  showStorekeeperMainWindow() {
    this.globalUpdateView?.(ScreenId.STOREKEEPER_MAIN_WINDOW);
    this.storekeeperDispatch && this.storekeeperDispatch({ type: "CHANGE_SCREEN", screen: StorekeeperScreenId.MAIN_WINDOW });
  }
}
