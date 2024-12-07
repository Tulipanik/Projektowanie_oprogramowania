import { UCShowManagerAddExternalCompanyForm } from "../../../use_cases/UCShowManagerAddExternalCompanyForm";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";
import { CAddExternalCompany } from "./CAddExternalCompany";

export function VAddExternalCompany(
    isActive: boolean,
    ucShowManagerAddExternalCompanyForm: UCShowManagerAddExternalCompanyForm,
    ucShowManagerMainWindow: UCShowManagerMainWindow
  ) {
  
    if (!isActive) return;
  
    const {pressShowManagerMainWindowBtn} = CAddExternalCompany(ucShowManagerAddExternalCompanyForm, ucShowManagerMainWindow);

    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between mb-4">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={pressShowManagerMainWindowBtn}
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