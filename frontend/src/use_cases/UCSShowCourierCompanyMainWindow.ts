import { PCourierCompanyMainWindow } from "../view/courier_company/CourierCompanyMainWindow/PCourierCompanyMainWindow";
import { PMainMenu } from "../view/PMainMenu";

export class UCShowCourierCompanyMainWindow {
  constructor(
    private pMainMenu: PMainMenu,
    private pCourierCompanyMainWindow: PCourierCompanyMainWindow
  ) {}

  showCourierCompanyMainWindow() {
    this.pCourierCompanyMainWindow.showCourierCompanyMainWindow();
  }

  backSelected() {
    this.pMainMenu.showMainMenu();
  }
}
