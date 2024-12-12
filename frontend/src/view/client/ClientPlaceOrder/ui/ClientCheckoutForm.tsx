import {
  INITIAL_CLIENT_ORDER_DATA_VALUES,
} from "../../../../view_model/Client";
import { Field, Form, Formik } from "formik";
import { orderDataDTO } from "../../../../view_model/Order";
import { OrderDishDTO } from "../../../../view_model/Dish";

export function AddressForm(
  pressOrderSummaryBtn: (cart: OrderDishDTO[], orderData: orderDataDTO) => void,
  cart: OrderDishDTO[]
) {

  // Custom validation function
  const validate = (values: orderDataDTO) => {
    let errors: Partial<Record<keyof orderDataDTO, string>> = {};

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.surname) {
      errors.surname = "Last name is required";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?\d{1,12}$/.test(values.phone)) {
      errors.phone = "Phone number must contain only digits, optionally start with '+' and be no longer than 13 characters";
    }
    if (!values.email) {
      errors.email = "E-mail is required";
    }
    if (!values.zipCode) {
      errors.zipCode = "Zip code is required";
    } else if (!/^\d{2}-\d{3}$/.test(values.zipCode)) {
      errors.zipCode = "Zip code must be in the format XX-XXX where X is a digit";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.street) {
      errors.street = "Street, Building/Apartment No. is required";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={INITIAL_CLIENT_ORDER_DATA_VALUES}
      validate={validate}
      onSubmit={(values) => {
        pressOrderSummaryBtn(cart, values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="p-4 m-4 rounded-md">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <Field
                id="name"
                name="name"
                className="w-full p-2 border rounded-md"
              />
              {errors.name && touched.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="surname" className="block mb-1">
                Last name
              </label>
              <Field
                id="surname"
                name="surname"
                className="w-full p-2 border rounded-md"
              />
              {errors.surname && touched.surname && (
                <div className="text-red-500 text-sm">{errors.surname}</div>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="phone" className="block mb-1">
                Phone number
              </label>
              <Field
                id="phone"
                name="phone"
                className="w-full p-2 border rounded-md"
              />
              {errors.phone && touched.phone && (
                <div className="text-red-500 text-sm">{errors.phone}</div>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block mb-1">
                E-mail
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border rounded-md"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="zipCode" className="block mb-1">
                Zip code
              </label>
              <Field
                id="zipCode"
                name="zipCode"
                className="w-full p-2 border rounded-md"
                maxLength="6"
              />
              {errors.zipCode && touched.zipCode && (
                <div className="text-red-500 text-sm">{errors.zipCode}</div>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="city" className="block mb-1">
                City
              </label>
              <Field
                id="city"
                name="city"
                className="w-full p-2 border rounded-md"
              />
              {errors.city && touched.city && (
                <div className="text-red-500 text-sm">{errors.city}</div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="street" className="block mb-1">
              Street, Building/Apartment No.
            </label>
            <Field
              id="street"
              name="street"
              className="w-full p-2 border rounded-md"
            />
            {errors.street && touched.street && (
              <div className="text-red-500 text-sm">{errors.street}</div>
            )}
          </div>

          <div>
            <label htmlFor="comment" className="block mb-1">
              Notes for the courier
            </label>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              className="w-full p-2 border rounded-md h-20 resize-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-violet-600 text-white mx-auto center py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2"
            >
              Go to summary
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
