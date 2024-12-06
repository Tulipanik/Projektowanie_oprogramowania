import { UCShowAdminAddCateringCompanyForm } from "../../../use_cases/UCShowAdminAddCateringCompanyForm";
import { UCShowAdminMainWindow } from "../../../use_cases/UCShowAdminMainWindow";

export function CAddCateringCompany(
  ucShowAdminAddCateringCompanyForm:UCShowAdminAddCateringCompanyForm,
  ucShowAdminMainWindow:UCShowAdminMainWindow
  ) {
    function pressShowAdminMainWindowBtn() {
      ucShowAdminMainWindow.backSelected();
    }

    return {pressShowAdminMainWindowBtn}
  }