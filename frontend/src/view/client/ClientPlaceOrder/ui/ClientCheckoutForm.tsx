import { Field, Form, Formik } from "formik";
import {AddressData} from '../../../../view_model/AddressData'
// import { AddressFormFields } from "../../../../view_model/Client";

// interface AddressFormProps {
//   onSubmit: (values: {
//     firstName: string;
//     lastName: string;
//     phone: string;
//     email: string;
//     postalCode: string;
//     city: string;
//     address: string;
//     courierNotes: string;
//   }) => void;
// }

interface AddressFormProps {
  onSubmit: (values: AddressData) => void;
}

export function AddressForm(
  { onSubmit }: AddressFormProps)
  // filters: AddressFormFields,
  // // pressUpdateFilterBtn: (filters: AddressFormFilters) => void)
  {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    postalCode: "",
    city: "",
    address: "",
    courierNotes: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => { const addressData: AddressData = {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        postalCode: values.postalCode,
        city: values.city,
        address: values.address,
        courierNotes: values.courierNotes,
      };

      console.log(values);
      onSubmit(addressData);
    }}
      >
      {({ resetForm }) => (
        <Form className="p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-1">Imię</label>
              <Field
                id="firstName"
                name="firstName"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-1">Nazwisko</label>
              <Field
                id="lastName"
                name="lastName"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="phone" className="block mb-1">Telefon</label>
              <Field
                id="phone"
                name="phone"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block mb-1">E-mail</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="postalCode" className="block mb-1">Kod pocztowy</label>
              <Field
                id="postalCode"
                name="postalCode"
                className="w-full p-2 border rounded-md"
                maxLength="5"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="city" className="block mb-1">Miasto</label>
              <Field
                id="city"
                name="city"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block mb-1">Ulica, Nr. budynku/mieszkania</label>
            <Field
              id="address"
              name="address"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="courierNotes" className="block mb-1">Uwagi dla kuriera</label>
            <Field
              as="textarea"
              id="courierNotes"
              name="courierNotes"
              className="w-full p-2 border rounded-md h-20 resize-none"
            />
          </div>
          <div>
          <button type="submit" className="w-11/12 bg-violet-600 text-white mx-auto center py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2">
            Przejdź do płatności za zamówienie
          </button>
        </div>
        </Form>
      )}
    </Formik>
  );
}