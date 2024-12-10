import { useReducer } from "react";
import { UCSManagerAddExternalCompany } from "../../../use_cases/UCSManagerAddExternalCompany";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";
import { ManagerAppState, ManagerScreenId } from "../../../view_model/Manager";
import { PAddExternalCompany } from "../ManagerAddExternalCompany/PAddExternalCompany";
import { VManagerMenu } from "../ManagerMenu/VManagerMenu";
import { PManagerMainWindow } from "./PManagerMainWindow";
import { VAddExternalCompany } from "../ManagerAddExternalCompany/VAddExternalCompany";
import { ExternalCompanyProxy } from "../../../services/IExternalCompany";
import { VManagerAddExternalCompanySuccessWindow } from "../ManagerAddExternalCompany/ManagerAddExternalCompanySuccessWindow/VManagerAddExternalCompanySuccessWindow";
import { VManagerAddExternalCompanyFailWindow } from "../ManagerAddExternalCompany/ManagerAddExternalCompanyFailWindow/VManagerAddExternalCompanyFailWindow";
import { updateManagerViewState } from "./CManagerMainWindow";

const pAddExternalCompany = new PAddExternalCompany();
const iExternalCompany = new ExternalCompanyProxy();

const ucsManagerAddExternalCompany = new UCSManagerAddExternalCompany(
	pAddExternalCompany,
	iExternalCompany
);

export function VManagerMainWindow(
	isActive: boolean,
	ucShowManagerMainWindow: UCShowManagerMainWindow,
	pManagerMainWindow: PManagerMainWindow
) {
	const [managerState, managerStateUpdate] = useReducer(
		updateManagerViewState,
		new ManagerAppState()
	);

	if (!isActive) return;

	pManagerMainWindow.injectManagerDispatch(managerStateUpdate);
	pAddExternalCompany.injectManagerDispatch(managerStateUpdate);

	return (
		<div>
			{VManagerMenu(
				managerState.screen === ManagerScreenId.MENU,
				ucShowManagerMainWindow,
				ucsManagerAddExternalCompany
			)}
			{VAddExternalCompany(
				managerState.screen === ManagerScreenId.ADD_COMPANY,
				ucsManagerAddExternalCompany,
				ucShowManagerMainWindow,
				{ companyType: managerState.companyType }
			)}
			{VManagerAddExternalCompanySuccessWindow(
				managerState.screen === ManagerScreenId.ADD_EXTERNAL_COMPANY_SUCCESS,
				ucShowManagerMainWindow,
				ucsManagerAddExternalCompany
			)}
			{VManagerAddExternalCompanyFailWindow(
				managerState.screen === ManagerScreenId.ADD_EXTERNAL_COMPANY_FAIL,
				ucShowManagerMainWindow,
				ucsManagerAddExternalCompany
			)}
		</div>
	);
}
