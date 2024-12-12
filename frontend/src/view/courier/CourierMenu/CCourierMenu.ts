import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { UCSShowCourierMainWindow } from "../../../use_cases/UCSShowCourierMainWindow";
import { UCSShowCourierOrdersList } from "../../../use_cases/UCSShowCourierOrdersList";

export function CCourierMenu(ucshowCourierMainWindow: UCSShowCourierMainWindow, ucsShowCourierOrdersList: UCSShowCourierOrdersList) {

  function pressShowOrdersListBtn() {
    ucsShowCourierOrdersList.handleShowCourierOrdersListBtnClick();
  }

  function pressBackToMainWindowBtn() {
    ucshowCourierMainWindow.handleBackBtnClick();
  };

  return { pressShowOrdersListBtn, pressBackToMainWindowBtn };
}