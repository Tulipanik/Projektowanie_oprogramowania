import { INITIAL_COURIER_COMPANY_ADD_DISH_VALUES } from "../../../../view_model/CourierCompany";
import { AddDishDTO, mealType } from "../../../../view_model/Dish";
import { Field, Form, Formik } from "formik";

export function CourierCompanyAddDishForm(
  pressAddNewDishBtn: (dish: AddDishDTO) => void
) {
  // Custom validation function
  const validate = (values: AddDishDTO) => {
    let errors: Partial<Record<keyof AddDishDTO, string>> = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.price) {
      errors.price = "Price is required";
    } else if (values.price <= 0) {
      errors.price = "Price must be greater than zero";
    }
    if (!values.calories) {
      errors.calories = "Calories are required";
    } else if (values.calories <= 0) {
      errors.calories = "Calories must be greater than zero";
    }
    if (!values.mealType) {
      errors.mealType = "Meal type is required";
    }
    if (!values.kitchenType) {
      errors.kitchenType = "Kitchen type is required";
    }
    if (!values.ingredients) {
      errors.ingredients = "Ingredients are required";
    }
    if (!values.photo) {
      errors.photo = "Photo URL is required";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={INITIAL_COURIER_COMPANY_ADD_DISH_VALUES}
      validate={validate}
      onSubmit={(values) => {
        pressAddNewDishBtn(values);
      }}
    >
      {({ errors, touched }) => (
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
            <div className="flex gap-4 justify-center items-center px-4">
              <label htmlFor="price" className="text-left">
                Price
              </label>
              <Field
                name="price"
                type="number"
                className="p-2 border rounded-md w-full"
              />
              {errors.price && touched.price && (
                <div className="text-red-500 text-sm">{errors.price}</div>
              )}
            </div>
            <div className="flex gap-4 justify-center items-center px-4">
              <label htmlFor="calories" className="text-left">
                Calories
              </label>
              <Field
                name="calories"
                type="number"
                className="p-2 border rounded-md w-full"
              />
              {errors.calories && touched.calories && (
                <div className="text-red-500 text-sm">{errors.calories}</div>
              )}
            </div>
            <Field name="mealType" as="select" className="p-2 mx-2">
              {Object.values(mealType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Field>
            {errors.mealType && touched.mealType && (
              <div className="text-red-500 text-sm text-center">
                {errors.mealType}
              </div>
            )}
            <div className="flex gap-2 justify-center items-center px-4">
              <label htmlFor="kitchenType" className="text-left">
                Kitchen Type
              </label>
              <Field
                name="kitchenType"
                className="p-2 border rounded-md w-full"
              />
              {errors.kitchenType && touched.kitchenType && (
                <div className="text-red-500 text-sm">{errors.kitchenType}</div>
              )}
            </div>
            <div className="flex gap-4 justify-center items-center px-4">
              <label htmlFor="ingredients" className="text-left">
                Ingredients
              </label>
              <Field
                name="ingredients"
                className="p-2 border rounded-md w-full"
              />
              {errors.ingredients && touched.ingredients && (
                <div className="text-red-500 text-sm">{errors.ingredients}</div>
              )}
            </div>
            <div className="flex gap-4 justify-center items-center px-4">
              <label htmlFor="photo" className="text-left">
                Photo
              </label>
              <Field name="photo" className="p-2 border rounded-md w-full" />
              {errors.photo && touched.photo && (
                <div className="text-red-500 text-sm">{errors.photo}</div>
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
