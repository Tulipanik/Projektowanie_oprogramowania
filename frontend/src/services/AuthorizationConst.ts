
import { IAuthService } from "./IAuthService";
import { LoginData } from "../view_model/Authorization";

class AuthorizationComponent{
    token:string = "";
    authService: IAuthService|null = null;
    inject(authService:IAuthService):void {
        this.authService=authService;
    }
    async login(loginData:LoginData):Promise<boolean> {
        var newToken:string= this.authService? await this.authService.fetchToken(loginData): "";
        this.token=newToken;
        return newToken!=="";
    }
    logout():void{
        this.token="";
    }
}

export const AuthorizationConst = new AuthorizationComponent();