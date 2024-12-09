import { UCShowAdminAddCateringCompanyForm } from "../../../use_cases/UCShowAdminAddCateringCompanyForm";
import { UCShowAdminMainWindow } from "../../../use_cases/UCShowAdminMainWindow";
import { CAddCateringCompany } from "./CAddCateringCompany";

export function VAddCateringCompany(
    isActive: boolean,
    ucShowAdminAddCateringCompanyForm:UCShowAdminAddCateringCompanyForm,
    ucShowAdminMainWindow:UCShowAdminMainWindow
  ) {
  
    if (!isActive) return;
  
    const {pressShowAdminMainWindowBtn} = CAddCateringCompany(ucShowAdminAddCateringCompanyForm,ucShowAdminMainWindow);

    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={pressShowAdminMainWindowBtn}
            className="flex items-center text-indigo-400 hover:text-indigo-500"
          >
            <span className="material-icons">arrow_back</span>
          </button>
          <h1 className="text-2xl font-bold text-violet-500">Cart</h1>
        </div>
      </div>
      </div>
    );
  }