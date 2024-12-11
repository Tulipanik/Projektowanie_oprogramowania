import { PStorekeeperMainWindow } from "../view/storekeeper/StorekeeperMainWindow/PStorekeeperMainWindow";
import { PMainMenu } from "../view/PMainMenu";

export class UCShowStorekeeperMainWindow {

  constructor(
    private pMainMenu: PMainMenu, 
    private pStorekeeperMainWindow: PStorekeeperMainWindow
  ) {
}

  handleShowStorekeeperMainWindowBtnClick() {
    // console.log("powrót")
    // console.log("pokaz storekeepermainwindow")
    this.pStorekeeperMainWindow.showStorekeeperMainWindow();
  }

  handleBackSelectedBtnClick() {
    this.pMainMenu.showMainMenu()
  }

}
