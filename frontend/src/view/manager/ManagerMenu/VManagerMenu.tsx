import { UCShowManagerAddExternalCompanyForm } from "../../../use_cases/UCShowManagerAddExternalCompanyForm";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";
import { CManagerMenu } from "./CManagerMenu";



export function VManagerMenu(
  isActive: boolean,
  ucShowManagerMainWindow: UCShowManagerMainWindow,
  ucShowManagerAddExternalCompanyForm: UCShowManagerAddExternalCompanyForm
) {

  if (!isActive) return;

  const { pressBackToMainWindowBtn, pressShowAddExternalCompanyForm } = CManagerMenu(ucShowManagerMainWindow, ucShowManagerAddExternalCompanyForm);

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
          onClick={pressShowAddExternalCompanyForm}
          className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center"
        >
          <span className="material-icons">computer</span>
          Show add new catering company form
        </button>
      </div>
    </div>
  );

}