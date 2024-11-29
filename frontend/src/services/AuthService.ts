import { IAuthService } from "./IAuthService"
import { LoginData } from "../view_model/Authorization";

export class AuthService implements IAuthService {

    async fetchToken(loginData: LoginData): Promise<string> {

        let url = `http://localhost:8080/api/v1/auth/login`
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(loginData)
            });
            if (response.status === 200)
                return (await response.json()).authToken;
            return "";
        } catch (error) {
            return "";
        }
    }

}