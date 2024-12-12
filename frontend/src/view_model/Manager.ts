import { CompanyType, ExternalCompanyDataDTO } from "./ExternalCompany";

export enum ManagerScreenId {
  MENU,
  ADD_COMPANY,
  ADD_EXTERNAL_COMPANY_SUCCESS,
  ADD_EXTERNAL_COMPANY_FAIL,
}

export class ManagerAppState {
  screen: ManagerScreenId = ManagerScreenId.MENU;
  companyType: CompanyType = CompanyType.COURIER;
};

export interface UpdateManagerStateAction {
  type: "CHANGE_SCREEN" | "UPDATE_COMPANY_TYPE";
  screen?: ManagerScreenId;
  companyType?: CompanyType;
}

export const INITIAL_MANAGER_ADD_COURIER_COMPANY_VALUES: ExternalCompanyDataDTO = {
  address: "",
	// companyId: 0,
	companyType: CompanyType.COURIER,
	username: "",
	// email: "",
	name: "",
	NIP: '',
	password: '',
	phoneNumber: '',
};