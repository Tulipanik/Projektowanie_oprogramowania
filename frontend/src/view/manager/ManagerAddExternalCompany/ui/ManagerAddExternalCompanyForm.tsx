import { Field, Form, Formik } from "formik";
import { INITIAL_MANAGER_ADD_COURIER_COMPANY_VALUES } from "../../../../view_model/Manager";
import {
	CompanyType,
	ExternalCompanyDataDTO,
} from "../../../../view_model/ExternalCompany";

export function ManagerAddExternalCompanyForm(
	companyType: CompanyType,
	pressAddNewCompanyBtn: (data: ExternalCompanyDataDTO) => void
) {
	const validate = (values: ExternalCompanyDataDTO) => {
		let errors: Partial<Record<keyof ExternalCompanyDataDTO, string>> = {};
		if (!values.name) {
			errors.name = "Name is required";
		}
		if (!values.username) {
			errors.username = "Email is required";
		}
		if (!values.address) {
			errors.address = "Address is required";
		}
		if (!values.NIP) {
			errors.NIP = "NIP is required";
		}
		if (!values.phoneNumber) {
			errors.phoneNumber = "Phone number is required";
		}
		if (!values.password) {
			errors.password = "Password is required";
		}
		return errors;
	};
	return (
		<Formik
			initialValues={INITIAL_MANAGER_ADD_COURIER_COMPANY_VALUES}
			validate={validate}
			onSubmit={(values) => {
				const newValues: ExternalCompanyDataDTO = {
					...values,
					companyType,
				};
				console.log(newValues);
				pressAddNewCompanyBtn(newValues);
			}}>
			{({ errors, touched, setFieldValue }) => (
				<div className="w-1/2 bg-sky-200 p-6 rounded-md shadow-md m-auto mt-5">
					<Form className="flex flex-col gap-4">
						<div className="flex gap-4 justify-center items-center px-4">
							<label htmlFor="name" className="text-left">
								Name
							</label>
							<Field name="name" className="p-2 border rounded-md w-full" />
							{errors.name && touched.name && (
								<div className="text-red-500 text-sm">{errors.name}</div>
							)}
						</div>
						{/* <div className="flex gap-4 justify-center items-center px-4">
							<label htmlFor="email" className="text-left">
								Email
							</label>
							<Field name="email" className="p-2 border rounded-md w-full" />
							{errors.email && touched.email && (
								<div className="text-red-500 text-sm">{errors.email}</div>
							)}
						</div> */}
						<div className="flex gap-4 justify-center items-center px-4">
							<label htmlFor="username" className="text-left">
								Email
							</label>
							<Field
								name="username"
								type="email"
								className="p-2 border rounded-md w-full"
							/>
							{errors.username && touched.username && (
								<div className="text-red-500 text-sm">{errors.username}</div>
							)}
						</div>
						<div className="flex gap-4 justify-center items-center px-4">
							<label htmlFor="address" className="text-left">
								Address
							</label>
							<Field name="address" className="p-2 border rounded-md w-full" />
							{errors.address && touched.address && (
								<div className="text-red-500 text-sm">{errors.address}</div>
							)}
						</div>
						<div className="flex gap-4 justify-center items-center px-4">
							<label htmlFor="NIP" className="text-left">
								NIP
							</label>
							<Field name="NIP" className="p-2 border rounded-md w-full" />
							{errors.NIP && touched.NIP && (
								<div className="text-red-500 text-sm">{errors.NIP}</div>
							)}
						</div>
						<div className="flex gap-4 justify-center items-center px-4">
							<label htmlFor="phoneNumber" className="text-left">
								Phone
							</label>
							<Field
								name="phoneNumber"
								className="p-2 border rounded-md w-full"
							/>
							{errors.phoneNumber && touched.phoneNumber && (
								<div className="text-red-500 text-sm">{errors.phoneNumber}</div>
							)}
						</div>
						<div className="flex gap-4 justify-center items-center px-4">
							<label htmlFor="password" className="text-left">
								Password
							</label>
							<Field name="password" type="password" className="p-2 border rounded-md w-full" />
							{errors.password && touched.password && (
								<div className="text-red-500 text-sm">{errors.password}</div>
							)}
						</div>
						<button type="submit" className="p-2 bg-sky-300 hover:bg-sky-500">
							Submit
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
}
