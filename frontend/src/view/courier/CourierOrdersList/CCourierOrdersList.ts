import { UCSShowCourierMainWindow } from "../../../use_cases/UCSShowCourierMainWindow";

export function CCourierOrdersList(ucshowCourierMainWindow: UCSShowCourierMainWindow) {
  function pressBackToMainWindowBtn() {
    ucshowCourierMainWindow.handleBackBtnClick();
  }

  return { pressBackToMainWindowBtn };
}