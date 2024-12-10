import { UCSManagerAddExternalCompany } from "../../../use_cases/UCSManagerAddExternalCompany";
import { UCShowManagerMainWindow } from "../../../use_cases/UCShowManagerMainWindow";

export function CManagerMenu(
	ucShowManagerMainWindow: UCShowManagerMainWindow,
	ucsManagerAddExternalCompany: UCSManagerAddExternalCompany
) {
	function pressBackToMainWindowBtn() {
		ucShowManagerMainWindow.backSelected();
	}

	function pressAddNewCateringCompanyBtn() {
		ucsManagerAddExternalCompany.handleAddNewCateringCompanyBtnClick();
	}
	function pressAddNewCourierCompanyBtn() {
		ucsManagerAddExternalCompany.handleAddNewCourierCompanyBtnClick();
	}

	return {
		pressBackToMainWindowBtn,
		pressAddNewCateringCompanyBtn,
		pressAddNewCourierCompanyBtn,
	};
}
