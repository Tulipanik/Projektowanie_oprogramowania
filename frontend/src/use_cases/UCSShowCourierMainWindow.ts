import { PCourierMainWindow } from './../view/courier/CourierMainWindow/PCourierMainWindow';
import { PMainMenu } from "../view/PMainMenu";

export class UCSShowCourierMainWindow {

  constructor(
    private pMainMenu: PMainMenu,
    private pCourierMainWindow: PCourierMainWindow
  ) { }

  handleShowCourierMainWindowBtnClick() {
    this.pCourierMainWindow.showCourierMainWindow();
  }

  handleBackBtnClick() {
    this.pMainMenu.showMainMenu();
  }
}