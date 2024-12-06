
import { CManagerAddCourierCompany } from "./CManagerAddCourierCompany";
import { CateringCompanyAddDishForm } from "./ui/ManagerAddCourierCompanyForm";

export function VManagerAddCourierCompany(
  isActive: boolean,
  // ucsCateringCompanyAddNewDish: UCCateringCompanyAddNewDish
) {
  const { pressShowCourierCompanyListBtn, pressAddNewCourierCompanyBtn } = CManagerAddCourierCompany(
    // ucsCateringCompanyAddNewDish
  );

  if (!isActive) return;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-screen">
        <button
          onClick={pressShowCourierCompanyListBtn}
          className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
        >
          <span className="material-icons">arrow_back</span>
          <h2 className="text-2xl font-semibold">Back</h2>
        </button>
      </div>
      <div className="flex w-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-sky-400 p-4">
          Add New Courier Company to Offer
        </h1>
      </div>
      {CateringCompanyAddDishForm(pressAddNewCourierCompanyBtn)}
    </div>
  );
}
