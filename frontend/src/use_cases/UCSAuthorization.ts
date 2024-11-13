import { PAuthMenu } from "../view/PAuthMenu";
import { PMainMenu } from "../view/PMainMenu";
import { AuthorizationConst } from "../services/AuthorizationConst";

export class UCAuthorizeUser {

  constructor(private pAuthMenu: PAuthMenu, private pMainMenu:PMainMenu) {
  }

  async tryAuthorizeUser(values:any){
    if (await AuthorizationConst.login(values))
      this.pMainMenu.showMainMenu()
    else 
      this.pAuthMenu.authFailed();
  }

  unauthorizeUSer(){
    AuthorizationConst.logout();
    this.pAuthMenu.deAuth();
  }

}