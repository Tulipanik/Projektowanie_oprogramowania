import { PClientMainWindow } from "../view/client/ClientMainWindow/PClientMainWindow";
import { PMainMenu } from "../view/PMainMenu";

export class UCShowClientMainWindow {

  constructor(private pMainMenu: PMainMenu, private pClientMainWindow: PClientMainWindow) {
  }

  showClientMainWindow() {
    this.pClientMainWindow.showClientMainWindow();
  }

  backSelected() {
    this.pMainMenu.showMainMenu()
  }


}
