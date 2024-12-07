import { useReducer } from "react";
import { UCShowManagerAddExternalCompanyForm } from "../../../use_cases/UCShowManagerAddExternalCompanyForm";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";
import { ManagerAppState, ManagerScreenId } from "../../../view_model/Manager";
import { PAddExternalCompany } from "../ManagerAddExternalCompany/PAddExternalCompany";
import { VManagerMenu } from "../ManagerMenu/VManagerMenu";
import { PManagerMainWindow } from "./PManagerMainWindow";
import { VAddExternalCompany } from "../ManagerAddExternalCompany/VAddExternalCompany";

const pAddExternalCompany = new PAddExternalCompany();

const ucShowManagerAddExternalCompanyForm = new UCShowManagerAddExternalCompanyForm(
  pAddExternalCompany
);

function switchView(state: ManagerAppState, action: ManagerScreenId) {
    let newState = { ...state };
    newState.screen = action;
    return newState;
  }

export function VManagerMainWindow(
  isActive: boolean,
  ucShowManagerMainWindow: UCShowManagerMainWindow,
  pManagerMainWindow:PManagerMainWindow
) {
  const [managerState, managerStateUpdate] = useReducer(
    switchView,
    {screen: ManagerScreenId.MENU}
  );

  if (!isActive) return;

  pManagerMainWindow.injectManagerDispatch(managerStateUpdate);
  pAddExternalCompany.injectManagerDispatch(managerStateUpdate);

  return (
    <div>
      {VManagerMenu(
        managerState.screen === ManagerScreenId.MENU,
        ucShowManagerMainWindow,
        ucShowManagerAddExternalCompanyForm
      )}
      {VAddExternalCompany(
        managerState.screen === ManagerScreenId.ADD_COMPANY,
        ucShowManagerAddExternalCompanyForm,
        ucShowManagerMainWindow
      )}
    </div>
  );
}
