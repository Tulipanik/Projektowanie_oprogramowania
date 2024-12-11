import { IExternalCompanyApi } from "../services/IExternalCompany";
import { PAddExternalCompany } from "../view/manager/ManagerAddExternalCompany/PAddExternalCompany";
import { ExternalCompanyDataDTO } from "../view_model/ExternalCompany";

export class UCSManagerAddExternalCompany {
	constructor(
		private pAddCompany: PAddExternalCompany,
		private externalCompanyApi: IExternalCompanyApi
	) {}

	handleAddNewCateringCompanyBtnClick() {
		this.pAddCompany.showAddCateringCompanyForm();
	}

	handleAddNewCourierCompanyBtnClick() {
		this.pAddCompany.showAddCourierCompanyForm();
	}

	async addNewExternalCompany(companyData: ExternalCompanyDataDTO) {
		return await this.externalCompanyApi
			.addNewExternalCompany(companyData)
			.then((boolean) => {
				if (boolean) {
					this.pAddCompany.showNewCompanyAddedWindow();
				} else {
					this.pAddCompany.showNewCompanyNotAddedWindow();
				}
			});
	}
}
