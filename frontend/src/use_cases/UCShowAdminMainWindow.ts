import { PMainMenu } from "../view/PMainMenu";
import { PAdminMainWindow } from "../view/admin/AdminMainWindow/PAdminMainWindow";

export class UCShowAdminMainWindow {
  constructor(
    private pMainMenu: PMainMenu,
    private pAdminMainWindow: PAdminMainWindow
  ) {}

  showAdminMainWindow() {
    this.pAdminMainWindow.showCAdminMainWindow();
  }

  backSelected() {
    this.pMainMenu.showMainMenu();
  }
}