import { UCSManagerAddExternalCompany } from "../../../use_cases/UCSManagerAddExternalCompany";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";
import { CManagerMenu } from "./CManagerMenu";

export function VManagerMenu(
	isActive: boolean,
	ucShowManagerMainWindow: UCShowManagerMainWindow,
	ucsManagerAddExternalCompany: UCSManagerAddExternalCompany
) {
	if (!isActive) return;

	const {
		pressBackToMainWindowBtn,
		pressAddNewCateringCompanyBtn,
		pressAddNewCourierCompanyBtn,
	} = CManagerMenu(ucShowManagerMainWindow, ucsManagerAddExternalCompany);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<h1 className="text-3xl font-bold mb-6">Manager Main Window</h1>
			<div className="flex flex-row justify-between gap-2">
				<button
					onClick={pressBackToMainWindowBtn}
					className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center">
					<span className="material-icons">arrow_back</span>
					Back to main window
				</button>
				<button
					onClick={pressAddNewCateringCompanyBtn}
					className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center">
					<span className="material-icons">local_dining</span>
					Add new catering company
				</button>
				<button
					onClick={pressAddNewCourierCompanyBtn}
					className="px-6 py-3 mb-4 bg-indigo-400 text-white rounded-md hover:bg-indigo-500 flex flex-row items-center gap-2 justify-center">
					<span className="material-icons">local_shipping</span>
					Add new courier company
				</button>
			</div>
		</div>
	);
}
