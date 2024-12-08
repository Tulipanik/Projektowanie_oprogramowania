import { UCShowClientOrderDetails } from "../../../use_cases/UCSShowClientOrderDetails";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";

export function CClientOrders(
  ucsShowClientWindow: UCShowClientMainWindow,
  ucsShowClientOrderDetails: UCShowClientOrderDetails
) {
  function pressShowClientMainWindowBtn() {
    ucsShowClientWindow.handleShowClientMainWindowBtnClick();
  }

  function pressShowClientOrderDetailsBtn(orderId: number) {
    ucsShowClientOrderDetails.getClientOrderDetails(orderId);
  }

  return {
    pressShowClientMainWindowBtn,
    pressShowClientOrderDetailsBtn,
  };
}
