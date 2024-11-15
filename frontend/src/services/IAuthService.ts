import { LoginData } from "../view_model/Authorization";

export interface IAuthService{
    fetchToken(loginData:LoginData):Promise<string>;
}