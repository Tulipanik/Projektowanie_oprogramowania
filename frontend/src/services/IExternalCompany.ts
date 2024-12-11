import { ExternalCompanyDataDTO } from "../view_model/ExternalCompany";
import { AuthorizationConst } from "./AuthorizationConst";

export interface IExternalCompanyApi {
	addNewExternalCompany(companyData: ExternalCompanyDataDTO): Promise<boolean>;
}

export class ExternalCompanyProxy implements IExternalCompanyApi {
	async addNewExternalCompany(
		companyData: ExternalCompanyDataDTO
	): Promise<boolean> {
		const url = "http://localhost:8080/api/v1/company/addCompany";

		const requestOptions: RequestInit = {
			method: "POST",
			headers: {
				accept: "*/*",
				"Content-Type": "application/json",
				Authorization: `Bearer ${AuthorizationConst.token}`,
			},
			body: JSON.stringify(companyData),
		};
		try {
			const response = await fetch(url, requestOptions);
			if (!response.ok) {
				return false;
			} else {
				return response.json();
			}
		} catch (error) {
			console.error("Error placing order:", error);
			throw error;
		}
	}
}
