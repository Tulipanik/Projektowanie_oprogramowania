export interface ExternalCompanyDataDTO {
	address: string;
	// companyId: number;
	companyType: CompanyType;
	// email: string;
	username: string;
	name: string;
	NIP: string;
	password: string;
	phoneNumber: string;
}

export enum CompanyType {
	CATERING = "CATERING",
	COURIER = "COURIER",
}
