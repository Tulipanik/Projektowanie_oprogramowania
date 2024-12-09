import { PCateringCompanyMainWindow } from "../view/catering_company/CateringCompanyMainWindow/PCateringCompanyMainWindow";
import { PMainMenu } from "../view/PMainMenu";

export class UCShowCateringCompanyMainWindow {
  constructor(
    private pMainMenu: PMainMenu,
    private pCateringCompanyMainWindow: PCateringCompanyMainWindow
  ) {}

  showCateringCompanyMainWindow() {
    this.pCateringCompanyMainWindow.showCateringCompanyMainWindow();
  }

  backSelected() {
    this.pMainMenu.showMainMenu();
  }
}
