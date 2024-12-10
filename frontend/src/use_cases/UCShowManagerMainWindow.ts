import { PManagerMainWindow } from "../view/manager/ManagerMainWindow/PManagerMainWindow";
import { PMainMenu } from "../view/PMainMenu";

export class UCShowManagerMainWindow {
  constructor(
    private pMainMenu: PMainMenu,
    private pManagerMainWindow: PManagerMainWindow
  ) {}

  showManagerMainWindow() {
    this.pManagerMainWindow.showCManagerMainWindow();
  }

  backSelected() {
    this.pMainMenu.showMainMenu();
  }
}