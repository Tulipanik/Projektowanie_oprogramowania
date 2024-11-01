import { Field, Form, Formik } from "formik";
import { DishViewFilters } from "../../../../view_model/Client";


export function ClientDishesForm(
  filters: DishViewFilters,
  pressUpdateFiltersBtn: (filters: DishViewFilters) => void,
  pressClearFiltersBtn: () => void
) {

  return (
    <Formik
      initialValues={filters}
      onSubmit={(values) => {
        pressUpdateFiltersBtn(values);
      }}
    >
      {({ resetForm }) => (
        <Form className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 p-4 bg-white shadow-md rounded-md">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
            <label htmlFor="companyName" className="md:w-1/4 text-right">Company Name</label>
            <Field id="companyName" name="companyName" placeholder="Company Name" className="w-full md:w-3/4 p-2 border rounded-md" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
            <label htmlFor="kitchenType" className="md:w-1/4 text-right">Kitchen Type</label>
            <Field id="kitchenType" name="kitchenType" placeholder="Kitchen Type" className="w-full md:w-3/4 p-2 border rounded-md" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
            <label htmlFor="mealType" className="md:w-1/4 text-right">Meal Type</label>
            <Field id="mealType" name="mealType" placeholder="Meal Type" className="w-full md:w-3/4 p-2 border rounded-md" />
          </div>
          <div className="flex justify-end w-full md:w-auto gap-2">
            {!DishViewFilters.isEmpty(filters) && (
              <button type="button" onClick={() => { pressClearFiltersBtn(); resetForm() }} className="px-4 py-2 bg-slate-300 text-white rounded-md hover:bg-slate-400">
                Clear
              </button>
            )}
            <button type="submit" className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 flex flex-row justify-center items-center gap-2">
              <span className="material-icons">
                filter_alt
              </span>
              Filter
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}