import { ScreenId } from "../view_model/Types";
import { Dispatch } from "react";

export class PresentationDispatcher {
  globalUpdateView!: Dispatch<ScreenId>;
  injectGlobalUpdateView(globalUpdateView: Dispatch<ScreenId>) {
    this.globalUpdateView = globalUpdateView;
  }

}
