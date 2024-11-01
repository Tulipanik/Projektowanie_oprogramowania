import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { CClientMenu } from "./CClientMenu";

export function VClientMenu(
  isActive: boolean,
  ucshowClientMainWindow: UCShowClientMainWindow,
  ucsShowClientDishList: UCSShowClientDishList
) {

  if (!isActive) return;

  const { pressShowDishListBtn, pressCartBtn, pressBackToMainWindowBtn } = CClientMenu(ucshowClientMainWindow, ucsShowClientDishList);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Client Main Window</h1>
      <div className="flex flex-row justify-between gap-2">
        <button
          onClick={pressBackToMainWindowBtn}
          className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">arrow_back</span>
          Back to main window
        </button>
        <button
          onClick={pressShowDishListBtn}
          className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">restaurant_menu</span>
          Show dish list
        </button>
        <button
          onClick={pressCartBtn}
          className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">shopping_cart</span>
          Show cart
        </button>
      </div>
    </div>
  );

}