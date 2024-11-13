import { UCAuthorizeUser } from "../use_cases/UCSAuthorization";

export function CAuthMenu(ucAuthorize:UCAuthorizeUser) {
    function tryUserAuthorization(values:any){
        ucAuthorize.tryAuthorizeUser(values);
    }
  return {tryUserAuthorization};
}