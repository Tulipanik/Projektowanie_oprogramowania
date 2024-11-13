import { IAuthService } from "./IAuthService"

export class AuthService implements IAuthService{
    
    async fetchToken(values: any): Promise<string> {

        let url = `http://localhost:8080/api/v1/auth/login?username=${values.username}&password=${values.password}`
        try{
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                'accept': '*/*'}
            });
            //TODO Get token from request
            if(response.status===200)
                return "mock";
            return "";
        }catch(error){
            return "";
        }
    }
    
}