import { PAddCateringCompany } from "../view/admin/AdminAddCateringCompany/PAddCateringCompany";

export class UCShowAdminAddCateringCompanyForm {
  constructor(
    private pAddCompany: PAddCateringCompany
  ) {}

  showAddCateringCompanyForm(){
    this.pAddCompany.showAddCompanyForm();
  }
}