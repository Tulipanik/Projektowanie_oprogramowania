import { INITIAL_CLIENT_ORDER_DATA_VALUES } from "../../../../view_model/Client";
import { Field, Form, Formik } from "formik";
import {orderDataDTO} from '../../../../view_model/Order'

export function AddressForm(pressOrderSummaryBtn: () => void) {
  const initialValues = {
    city: '',
    clientId: 1, //TODO: przypisywac wartosc zalogowanego klienta
    comment: '',
    email: '',
    name: '',
    phone: '',
    street: '',
    surname: '',
    zipCode: '',
  };

  return (
    <Formik
      initialValues={INITIAL_CLIENT_ORDER_DATA_VALUES}
      onSubmit={(values) => {
        pressOrderSummaryBtn();
      }}
      >
      {({ resetForm }) => (
        <Form className="p-4 m-4 rounded-md">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-1">Name</label>
              <Field
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="surname" className="block mb-1">Last name</label>
              <Field
                id="surname"
                name="surname"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="phone" className="block mb-1">Phone number</label>
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
              <label htmlFor="zipCode" className="block mb-1">Zip code</label>
              <Field
                id="zipCode"
                name="zipCode"
                className="w-full p-2 border rounded-md"
                maxLength="5"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="city" className="block mb-1">City</label>
              <Field
                id="city"
                name="city"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="street" className="block mb-1">Street, Building/Apartment No.</label>
            <Field
              id="street"
              name="street"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block mb-1">Notes for the courier</label>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              className="w-full p-2 border rounded-md h-20 resize-none"
            />
          </div>
          <div>
          <button type="submit" className="w-full bg-violet-600 text-white mx-auto center py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2">
            Go to summary
          </button>
        </div>
        </Form>
      )}
    </Formik>
  );
}