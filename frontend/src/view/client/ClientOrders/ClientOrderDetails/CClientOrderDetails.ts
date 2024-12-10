import { UCShowClientOrderList } from "../../../../use_cases/UCSShowClientOrderList";

export function CClientOrderDetails(
  ucsShowClientOrderList: UCShowClientOrderList
) {
  function pressShowClientOrderList() {
    ucsShowClientOrderList.showClientOrderList();
  }

  return {
    pressShowClientOrderList,
  };
}
