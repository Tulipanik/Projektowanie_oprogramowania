import { IAuthService } from "./IAuthService"

export class AuthServiceMock implements IAuthService{
    
    fetchToken(values: any): Promise<string>  {
        let content = (values.username === "admin" && values.password === "admin") ? "good_token":"";
        return new Promise(()=>content);
    }
    
}
