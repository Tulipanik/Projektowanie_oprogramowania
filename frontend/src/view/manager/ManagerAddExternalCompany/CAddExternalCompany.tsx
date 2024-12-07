import { UCShowManagerAddExternalCompanyForm } from "../../../use_cases/UCShowManagerAddExternalCompanyForm";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";

export function CAddExternalCompany(
  ucShowManagerAddExternalCompanyForm:UCShowManagerAddExternalCompanyForm,
  ucShowManagerMainWindow:UCShowManagerMainWindow
  ) {
    function pressShowManagerMainWindowBtn() {
      ucShowManagerMainWindow.backSelected();
    }

    return {pressShowManagerMainWindowBtn}
  }