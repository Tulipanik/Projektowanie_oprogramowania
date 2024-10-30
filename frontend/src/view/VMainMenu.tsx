import { useReducer } from "react";
import "../styles.css";
import { UCShowClientMainWindow } from "../use_cases/UCSShowClientWindow";
import { CMainMenu, updateMmView } from "./CMainMenu";

export default function VMainMenu(
  isActive: boolean,
  ucsShowClientMainWindow: UCShowClientMainWindow
) {
  const [mmData, mmUpdateView] = useReducer(updateMmView, { visible: true });

  if (!isActive) return;
  const { showClientMainWindow } = CMainMenu(ucsShowClientMainWindow);

  return (
    <div className="MainMenu">
      <h2>Choose an option:</h2>
      <button onClick={showClientMainWindow}>Show client main window</button>

    </div>
  );
}
