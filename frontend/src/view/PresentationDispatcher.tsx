import { ScreenId } from "../view_model/Types";
import { Dispatch } from "react";

export class PresentationDispatcher {
  gUpdateView!: Dispatch<ScreenId>;
  injectGlobalUpdateView(guv: Dispatch<ScreenId>) {
    this.gUpdateView = guv;
  }
}
