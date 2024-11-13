
export interface IAuthService{
    fetchToken(values:any):Promise<string>;
}