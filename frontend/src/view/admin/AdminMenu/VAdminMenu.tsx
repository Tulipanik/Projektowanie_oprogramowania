import { CAdminMenu } from "./CAdminMenu";
import { UCShowAdminMainWindow } from "../../../use_cases/UCShowAdminMainWindow";
import { UCShowAdminAddCateringCompanyForm } from "../../../use_cases/UCShowAdminAddCateringCompanyForm";

export function VAdminMenu(
  isActive: boolean,
  ucShowAdminMainWindow:UCShowAdminMainWindow,
  ucShowAdminAddCateringCompanyForm:UCShowAdminAddCateringCompanyForm
) {

  if (!isActive) return;

  const { pressBackToMainWindowBtn, pressShowAddCateringCompanyForm } = CAdminMenu(ucShowAdminMainWindow, ucShowAdminAddCateringCompanyForm);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Client Main Window</h1>
      <div className="flex flex-row justify-between gap-2">
        <button
          onClick={pressBackToMainWindowBtn}
          className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">arrow_back</span>
          Back to main window
        </button>
        <button
          onClick={pressShowAddCateringCompanyForm}
          className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">computer</span>
          Show add new catering company form
        </button>
      </div>
    </div>
  );

}