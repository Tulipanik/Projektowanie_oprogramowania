import { AdminPresentationDispatcher } from "../AdminPresentationDispatcher";
import { AdminScreenId } from "../../../view_model/Admin";

export class PAddCateringCompany extends AdminPresentationDispatcher{
    showAddCompanyForm(){
        this.adminDispatch?.(AdminScreenId.ADD_COMPANY);
    }
}