import { UCShowAdminMainWindow } from "../../../use_cases/UCShowAdminMainWindow";
import { UCShowAdminAddCateringCompanyForm } from "../../../use_cases/UCShowAdminAddCateringCompanyForm";

//UCShowAdminMainWindow

export function CAdminMenu(ucShowAdminMainWindow:UCShowAdminMainWindow,
  ucShowAdminAddCateringCompanyForm:UCShowAdminAddCateringCompanyForm) {
    function pressBackToMainWindowBtn() {
      ucShowAdminMainWindow.backSelected();
    };

    function pressShowAddCateringCompanyForm(){
      ucShowAdminAddCateringCompanyForm.showAddCateringCompanyForm();
    };

  return { pressBackToMainWindowBtn,pressShowAddCateringCompanyForm };
}