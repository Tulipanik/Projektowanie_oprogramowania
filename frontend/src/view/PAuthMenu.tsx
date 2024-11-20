import { ScreenId } from "../view_model/Types";
import { PresentationDispatcher } from "./PresentationDispatcher";

export class PAuthMenu extends PresentationDispatcher {

  authFailed() {
    alert("Unable to authorize user. Please try again.")
    this.globalUpdateView?.(ScreenId.AUTH);
  }

  deAuth() {
    this.globalUpdateView?.(ScreenId.AUTH);
  }
  
}
