import { UCSManagerAddExternalCompany } from "../../../use_cases/UCSManagerAddExternalCompany";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";
import { ManagerAppState } from "../../../view_model/Manager";
import { CAddExternalCompany } from "./CAddExternalCompany";
import { ManagerAddExternalCompanyForm } from "./ui/ManagerAddExternalCompanyForm";

export function VAddExternalCompany(
	isActive: boolean,
	ucsManagerAddExternalCompany: UCSManagerAddExternalCompany,
	ucShowManagerMainWindow: UCShowManagerMainWindow,
	state: Pick<ManagerAppState, "companyType">
) {
	if (!isActive) return;

	const { pressShowManagerMainWindowBtn, pressAddNewCompanyBtn } = CAddExternalCompany(
		ucsManagerAddExternalCompany,
		ucShowManagerMainWindow
	);

	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-between mb-4">
				<div className="flex flex-row items-center justify-center">
					<button
						onClick={pressShowManagerMainWindowBtn}
						className="flex items-center text-indigo-400 hover:text-indigo-500">
						<span className="material-icons">arrow_back</span>
					</button>
					<h1 className="text-2xl font-bold text-violet-500">Back</h1>
				</div>
			</div>
			<div className="flex w-screen items-center justify-center">
				<h1 className="text-4xl font-bold text-sky-400 p-4">
					Add New {state.companyType} Company
				</h1>
			</div>
			{ManagerAddExternalCompanyForm(state.companyType, pressAddNewCompanyBtn)}
		</div>
	);
}
