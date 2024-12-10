import { Dispatch } from "react";
import { PresentationDispatcher } from "../../PresentationDispatcher";
import { ScreenId } from "../../../view_model/Types";
import { ManagerScreenId, UpdateManagerStateAction } from "../../../view_model/Manager";

export class PManagerMainWindow extends PresentationDispatcher {
  private managerDispatch?: Dispatch<UpdateManagerStateAction>;

  injectManagerDispatch(
    managerDispatch: Dispatch<UpdateManagerStateAction>
  ) {
    this.managerDispatch = managerDispatch;
  }

  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }

  showCManagerMainWindow() {
    this.globalUpdateView?.(ScreenId.ADMIN_MAIN_WINDOW);
    this.managerDispatch &&
      this.managerDispatch({type: "CHANGE_SCREEN", screen: ManagerScreenId.MENU});
  }
}