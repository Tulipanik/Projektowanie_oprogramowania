import { UCShowManagerMainWindow } from "../../../../use_cases/UCShowManagerMainWindow";
import { UCSManagerAddExternalCompany } from "../../../../use_cases/UCSManagerAddExternalCompany";
import { CAddExternalCompany } from "../CAddExternalCompany";

export function VManagerAddExternalCompanyFailWindow(
	isActive: boolean,
	ucShowManagerMainWindow: UCShowManagerMainWindow,
	ucsManagerAddExternalCompany: UCSManagerAddExternalCompany
) {
	if (!isActive) return;

	const { pressShowManagerMainWindowBtn } = CAddExternalCompany(
		ucsManagerAddExternalCompany,
		ucShowManagerMainWindow
	);

	return (
		<div className="flex flex-col w-screen h-screen items-center justify-center">
			<h1 className="text-6xl font-bold text-red-800">
				Adding new company failed
			</h1>
			<button
				onClick={pressShowManagerMainWindowBtn}
				className="flex items-center text-indigo-400 hover:text-indigo-500 p-4">
				<span className="material-icons">arrow_back</span>
				<h2 className="text-2xl font-semibold">Back</h2>
			</button>
		</div>
	);
}
