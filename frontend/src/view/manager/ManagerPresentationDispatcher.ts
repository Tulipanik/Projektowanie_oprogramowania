import { Dispatch } from "react";
import { ManagerScreenId } from "../../view_model/Manager";

export class ManagerPresentationDispatcher {
  managerDispatch!: Dispatch<ManagerScreenId>;

  injectManagerDispatch(dispatch: Dispatch<ManagerScreenId>) {
    this.managerDispatch = dispatch;
  }
}