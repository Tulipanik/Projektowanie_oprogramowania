import { ScreenId } from "../../../view_model/Types";
import { PresentationDispatcher } from "../../PresentationDispatcher";


export class PClientMainWindow extends PresentationDispatcher {


  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAINMENU);
  }

  showClientMainWindow() {
    this.globalUpdateView?.(ScreenId.CLIENT_MAIN_WINDOW);
  }

}
