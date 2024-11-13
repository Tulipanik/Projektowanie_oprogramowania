
import { IAuthService } from "./IAuthService";

export const AuthorizationConst={
    token:"",
    authService: null as IAuthService|null,
    inject:(authService:IAuthService) => AuthorizationConst.authService=authService,
    login:async (values:any)=> {
        var newToken:string= AuthorizationConst.authService? await AuthorizationConst.authService.fetchToken(values): "";
        AuthorizationConst.token=newToken;
        return newToken!=="";
    },
    logout:()=>{AuthorizationConst.token="";}
}