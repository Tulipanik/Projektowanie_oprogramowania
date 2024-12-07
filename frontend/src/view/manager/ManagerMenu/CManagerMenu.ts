import { UCShowManagerAddExternalCompanyForm } from "../../../use_cases/UCShowManagerAddExternalCompanyForm";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";

export function CManagerMenu(ucShowManagerMainWindow:UCShowManagerMainWindow,
  ucShowManagerAddCateringCompanyForm: UCShowManagerAddExternalCompanyForm
) {
    function pressBackToMainWindowBtn() {
      ucShowManagerMainWindow.backSelected();
    };

    function pressShowAddExternalCompanyForm(){
      ucShowManagerAddCateringCompanyForm.showAddExternalCompanyForm();
    };

  return { pressBackToMainWindowBtn,pressShowAddExternalCompanyForm };
}