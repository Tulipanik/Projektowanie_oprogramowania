import { UCShowManagerMainWindow } from "../../../../use_cases/UCShowManagerMainWindow";

export function CManagerAddExternalCompanySuccessWindow(
	ucShowManagerMainWindow: UCShowManagerMainWindow
) {
	function pressShowManagerMainWindowBtn() {
		ucShowManagerMainWindow.showManagerMainWindow();
		// ucsCateringCompanyAddNewDish.showCateringCompanyDishesList();
	}

	return {
		pressShowManagerMainWindowBtn,
	};
}
