import { IAuthService } from "../services/IAuthService";
import { LoginData } from "../view_model/Authorization";

export class AuthServiceMock implements IAuthService{
    
    async fetchToken(loginData:LoginData): Promise<string>  {
        let content = (loginData.username === "admin" && loginData.password === "admin") ? "good_token":"";
        return content;
    }
    
}
