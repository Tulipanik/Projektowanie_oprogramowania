import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { PClientMainWindow } from "../ClientMainWindow/PClientMainWindow";
import { CClientMenu } from "./CClientMenu";

export function VClientMenu(
  isActive: boolean,
  pClientMainWindow: PClientMainWindow,
  ucsShowClientDishList: UCSShowClientDishList
) {

  if (!isActive) return;

  const { showClientDishes, showClientCart, backToMainWindow } = CClientMenu(pClientMainWindow, ucsShowClientDishList);

  return (
    <div>
      <h1>Client Main Window</h1>
      <button onClick={backToMainWindow}>
        Back to main window
      </button>

      <button onClick={showClientDishes}>
        Show dish list
      </button>

      <button onClick={showClientCart}>
        Show cart
      </button>
    </div>
  )

}