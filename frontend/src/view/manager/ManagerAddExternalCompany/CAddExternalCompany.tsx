import { UCSManagerAddExternalCompany } from "../../../use_cases/UCSManagerAddExternalCompany";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";
import { ExternalCompanyDataDTO } from "../../../view_model/ExternalCompany";

export function CAddExternalCompany(
	ucsManagerAddExternalCompany: UCSManagerAddExternalCompany,
	ucShowManagerMainWindow: UCShowManagerMainWindow
) {
	function pressShowManagerMainWindowBtn() {
		ucShowManagerMainWindow.showManagerMainWindow();
	}

	function pressAddNewCompanyBtn(data: ExternalCompanyDataDTO) {
		ucsManagerAddExternalCompany.addNewExternalCompany(data);
	}
	return { pressShowManagerMainWindowBtn, pressAddNewCompanyBtn };
}
