import { ScreenId } from "../view_model/Types";
import { PresentationDispatcher } from "./PresentationDispatcher";

export class PMainMenu extends PresentationDispatcher {

  showMainMenu() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }
}
