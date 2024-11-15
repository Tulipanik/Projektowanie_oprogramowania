import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";
import { LoginData } from "../view_model/Authorization";

export function CAuthMenu(ucAuthorize:UCAuthorizeUser) {
    function tryUserAuthorization(loginData:LoginData){
        ucAuthorize.tryAuthorizeUser(loginData);
    }
  return {tryUserAuthorization};
}