import { Dispatch } from "react";
import { UpdateManagerStateAction } from "../../view_model/Manager";

export class ManagerPresentationDispatcher {
	managerDispatch!: Dispatch<UpdateManagerStateAction>;

	injectManagerDispatch(dispatch: Dispatch<UpdateManagerStateAction>) {
		this.managerDispatch = dispatch;
	}
}
