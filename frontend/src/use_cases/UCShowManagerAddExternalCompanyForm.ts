import { PAddExternalCompany } from "../view/manager/ManagerAddExternalCompany/PAddExternalCompany";


export class UCShowManagerAddExternalCompanyForm {
  constructor(
    private pAddCompany: PAddExternalCompany
  ) {}

  showAddExternalCompanyForm(){
    this.pAddCompany.showAddCompanyForm();
  }
}