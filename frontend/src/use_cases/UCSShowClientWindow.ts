import { PClientMainWindow } from "../view/client/ClientMainWindow/PClientMainWindow";
import { PMainMenu } from "../view/PMainMenu";

export class UCShowClientMainWindow {

  constructor(private pMainMenu: PMainMenu, private pClientMainWindow: PClientMainWindow) {
  }

  handleShowClientMainWindowBtnClick() {
    this.pClientMainWindow.showClientMainWindow();
  }

  handleBackSelectedBtnClick() {
    this.pMainMenu.showMainMenu()
  }


}
