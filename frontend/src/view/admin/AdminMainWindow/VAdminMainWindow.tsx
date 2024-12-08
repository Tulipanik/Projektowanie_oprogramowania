import { useReducer } from "react";
import { AdminAppState } from "../../../view_model/Admin";
import { VAdminMenu } from "../AdminMenu/VAdminMenu";
import { PAdminMainWindow } from "./PAdminMainWindow";
import { PAddCateringCompany } from "../AdminAddCateringCompany/PAddCateringCompany";
import { UCShowAdminMainWindow } from "../../../use_cases/UCShowAdminMainWindow";
import { UCShowAdminAddCateringCompanyForm } from "../../../use_cases/UCShowAdminAddCateringCompanyForm";
import { AdminScreenId } from "../../../view_model/Admin";
import { VAddCateringCompany } from "../AdminAddCateringCompany/VAddCateringCompany";

const pAddCateringCompany = new PAddCateringCompany();

const ucShowAdminAddCateringCompanyForm = new UCShowAdminAddCateringCompanyForm(
  pAddCateringCompany
);

function switchView(state: AdminAppState, action: AdminScreenId) {
    let newState = { ...state };
    newState.screen = action;
    return newState;
  }

export function VAdminMainWindow(
  isActive: boolean,
  ucShowAdminMainWindow:UCShowAdminMainWindow,
  pAdminMainWindow:PAdminMainWindow
) {
  const [adminState, adminStateUpdate] = useReducer(
    switchView,
    {screen: AdminScreenId.MENU}
  );

  if (!isActive) return;

  pAdminMainWindow.injectAdminDispatch(adminStateUpdate);
  pAddCateringCompany.injectAdminDispatch(adminStateUpdate);

  return (
    <div>
      {VAdminMenu(
        adminState.screen === AdminScreenId.MENU,
        ucShowAdminMainWindow,
        ucShowAdminAddCateringCompanyForm
      )}
      {VAddCateringCompany(
        adminState.screen === AdminScreenId.ADD_COMPANY,
        ucShowAdminAddCateringCompanyForm,
        ucShowAdminMainWindow
      )}
    </div>
  );
}
