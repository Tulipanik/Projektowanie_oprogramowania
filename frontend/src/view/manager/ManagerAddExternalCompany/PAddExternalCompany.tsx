import { ManagerPresentationDispatcher } from "../ManagerPresentationDispatcher";
import { ManagerScreenId } from "../../../view_model/Manager";
import { CompanyType } from "../../../view_model/ExternalCompany";

export class PAddExternalCompany extends ManagerPresentationDispatcher {
	showNewCompanyAddedWindow() {
		this.managerDispatch?.({
			type: "CHANGE_SCREEN",
			screen: ManagerScreenId.ADD_EXTERNAL_COMPANY_SUCCESS,
		});
	}
	showNewCompanyNotAddedWindow() {
		this.managerDispatch?.({
			type: "CHANGE_SCREEN",
			screen: ManagerScreenId.ADD_EXTERNAL_COMPANY_FAIL,
		});
	}
	showAddCourierCompanyForm() {
		this.managerDispatch?.({
			type: "UPDATE_COMPANY_TYPE",
			companyType: CompanyType.COURIER,
		});
		this.managerDispatch?.({
			type: "CHANGE_SCREEN",
			screen: ManagerScreenId.ADD_COMPANY,
		});
	}
	showAddCateringCompanyForm() {
		this.managerDispatch?.({
			type: "UPDATE_COMPANY_TYPE",
			companyType: CompanyType.CATERING,
		});
		this.managerDispatch?.({
			type: "CHANGE_SCREEN",
			screen: ManagerScreenId.ADD_COMPANY,
		});
	}
}
