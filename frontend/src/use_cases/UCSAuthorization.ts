import { PAuthMenu } from "../view/PAuthMenu";
import { PMainMenu } from "../view/PMainMenu";
import { AuthorizationConst } from "../services/AuthorizationConst";
import { LoginData } from "../view_model/Authorization";

export class UCAuthorizeUser {

  constructor(private pAuthMenu: PAuthMenu, private pMainMenu: PMainMenu) {
  }

  async tryAuthorizeUser(loginData: LoginData) {
    if (await AuthorizationConst.login(loginData))
      this.pMainMenu.showMainMenu()
    else
      this.pAuthMenu.authFailed();
  }

  unauthorizeUSer() {
    AuthorizationConst.logout();
    this.pAuthMenu.deAuth();
  }

}