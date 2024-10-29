import "../styles.css";
import React, { useReducer } from "react";
import { CMainMenu, updateMmView } from "./CMainMenu";
import { UCShowClientList } from "../use_cases/UCShowClientList";
import { PMainMenu } from "./PMainMenu";

export default function VMainMenu(
  isActive: boolean,
  pMM: PMainMenu,
  ucSCL: UCShowClientList
) {
  const [mmData, mmUpdateView] = useReducer(updateMmView, { visible: true });
  pMM.injectDataHandles(mmData, mmUpdateView);

  if (!isActive) return;
  const [showClientListSelected] = CMainMenu(ucSCL);
  return (
    <div className="MainMenu">
      <h2>Choose an option:</h2>
      <button onClick={showClientListSelected}>Show client list</button>
    </div>
  );
}
