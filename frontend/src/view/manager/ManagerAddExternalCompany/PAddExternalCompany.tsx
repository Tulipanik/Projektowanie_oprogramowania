import { ManagerPresentationDispatcher } from "../ManagerPresentationDispatcher";
import { ManagerScreenId } from "../../../view_model/Manager";

export class PAddExternalCompany extends ManagerPresentationDispatcher{
    showAddCompanyForm(){
        this.managerDispatch?.(ManagerScreenId.ADD_COMPANY);
    }
}