import { Dispatch } from "react";
import { ActionId, ScreenId, MenuState } from "../view_model/Types";
import { PresentationDispatcher } from "./PresentationDispatcher";

export class PMainMenu extends PresentationDispatcher {
  mState!: MenuState;
  uView!: Dispatch<ActionId>;

  injectDataHandles(s: MenuState, uv: Dispatch<ActionId>) {
    this.mState = s;
    this.uView = uv;
  }

  showMainMenu() {
    this.mState.visible = !this.mState.visible;
    this.uView?.(ActionId.ADD);
    this.gUpdateView?.(ScreenId.MAINMENU);
  }
}
