import { Dispatch } from "react";
import { AdminScreenId } from "../../view_model/Admin";

export class AdminPresentationDispatcher {
  adminDispatch!: Dispatch<AdminScreenId>;

  injectAdminDispatch(dispatch: Dispatch<AdminScreenId>) {
    this.adminDispatch = dispatch;
  }
}