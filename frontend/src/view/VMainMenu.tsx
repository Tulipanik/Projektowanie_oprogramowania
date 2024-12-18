import "../styles.css";
import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { UCShowManagerMainWindow } from "../use_cases/UCShowManagerMainWindow";
import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";
import { CMainMenu, CMainMenuLogout } from "./CMainMenu";
import { UCSShowCourierMainWindow } from "../use_cases/UCSShowCourierMainWindow";
import { UCShowCateringCompanyMainWindow } from "../use_cases/UCSShowCateringCompanyMainWindow";
import { UCShowStorekeeperMainWindow } from "../use_cases/UCShowStorekeeperMainWindow";

export default function VMainMenu(
  isActive: boolean,
  ucsShowClientMainWindow: UCShowClientMainWindow,
  usShowCateringCompanyMainWindow: UCShowCateringCompanyMainWindow,
  ucShowStorekeeperMainWindow: UCShowStorekeeperMainWindow,
  ucShowManagerMainWindow: UCShowManagerMainWindow,
  ucsAuthorizeUser: UCAuthorizeUser,
  ucsShowCourierMainWindow: UCSShowCourierMainWindow
) {
  if (!isActive) return;

  const { showClientMainWindow, showCateringCompanyMainWindow, showStorekeeperMainWindow, showManagerMainWindow, showCourierMainWindow } = CMainMenu(
    ucsShowClientMainWindow,
    usShowCateringCompanyMainWindow,
    ucShowStorekeeperMainWindow,
    ucShowManagerMainWindow,
    ucsShowCourierMainWindow
  );
  const { showLogoutWindow } = CMainMenuLogout(ucsAuthorizeUser);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 gap-2">
      <h1 className="text-4xl font-bold mb-4">Order APP</h1>
      <h2 className="text-2xl mb-6">Choose an option:</h2>
      <button
        onClick={showClientMainWindow}
        className="px-6 py-3 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center"
      >
        <span className="material-icons">restaurant_menu</span>
        Show client window
      </button>
      <button
        onClick={showCateringCompanyMainWindow}
        className="px-6 py-3 bg-sky-400 text-white rounded-md hover:bg-sky-500 flex flex-row items-center gap-2 justify-center"
      >
        <span className="material-icons">business_center</span>
        Show catering company window
      </button>
      <button
        onClick={showManagerMainWindow}
        className="px-6 py-3 bg-sky-400 text-white rounded-md hover:bg-sky-500 flex flex-row items-center gap-2 justify-center"
      >
        <span className="material-icons">computer</span>
        Show manager window
      </button>
      <button
        onClick={showStorekeeperMainWindow}
        className="px-6 py-3 bg-sky-400 text-white rounded-md hover:bg-sky-500 flex flex-row items-center gap-2 justify-center"
      >
        <span className="material-icons">store</span>
        Show storekeeper window
      </button>
      <button
        onClick={showCourierMainWindow}
        className="px-6 py-3 bg-orange-400 text-white rounded-md hover:bg-orange-500 flex flex-row items-center gap-2 justify-center"
      >
        <span className="material-icons">local_shipping</span>
        Show courier window
      </button>
      <button
        onClick={showLogoutWindow}
        className="m-1 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 flex flex-row items-center gap-2 justify-center"
      >
        Logout
      </button>
    </div >
  );
}
