import { Dispatch } from "react";
import { PresentationDispatcher } from "../../PresentationDispatcher";
import { ScreenId } from "../../../view_model/Types";
import { AdminScreenId } from "../../../view_model/Admin";

export class PAdminMainWindow extends PresentationDispatcher {
  private adminDispatch?: Dispatch<AdminScreenId>;

  injectAdminDispatch(
    adminDispatch: Dispatch<AdminScreenId>
  ) {
    this.adminDispatch = adminDispatch;
  }

  showMainWindow() {
    this.globalUpdateView?.(ScreenId.MAIN_MENU);
  }

  showCAdminMainWindow() {
    this.globalUpdateView?.(ScreenId.ADMIN_MAIN_WINDOW);
    this.adminDispatch &&
      this.adminDispatch(AdminScreenId.MENU);
  }
}