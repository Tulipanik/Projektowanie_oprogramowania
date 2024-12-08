import { UCShowClientOrderList } from "../../../../use_cases/UCSShowClientOrderList";
import { ClientViewState } from "../../../../view_model/Client";
import { orderStatus } from "../../../../view_model/Order";
import { CClientOrderDetails } from "./CClientOrderDetails";

export function VClientOrderDetails(
  isActive: boolean,
  state: Pick<ClientViewState, "orderDetails">,
  ucsShowClientOrderList: UCShowClientOrderList
) {
  if (!isActive) return;

  const { pressShowClientOrderList } = CClientOrderDetails(
    ucsShowClientOrderList
  );

  const { orderDetails } = state;

  return (
    <div className="flex flex-col">
      {/* Back Button */}
      <div className="flex justify-between w-screen">
        <button
          onClick={pressShowClientOrderList}
          className="flex items-center text-indigo-400 hover:text-indigo-500 p-4"
        >
          <span className="material-icons">arrow_back</span>
          <h2 className="text-2xl font-semibold">Back</h2>
        </button>
      </div>

      {/* Page Header */}
      <div className="flex w-screen items-center justify-center mb-4">
        <h1 className="text-4xl font-bold text-indigo-400 p-4">
          Client Order Details
        </h1>
      </div>

      {/* Order Details Card */}
      <div className="border border-gray-200 bg-indigo-300 w-auto m-auto h-auto rounded-lg p-10 space-y-4">
        <p>
          <span className="font-semibold">Order:</span> #{orderDetails.orderId}
        </p>
        <p>
          <span className="font-semibold">Status:</span>{" "}
          {orderStatus[orderDetails.status]}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${orderDetails.price}
        </p>

        {/* Client Data */}
        <div>
          <p className="font-semibold">Client Data:</p>
          <div className="ml-4 space-y-2">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {orderDetails.clientData.name} {orderDetails.clientData.surname}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {orderDetails.clientData.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {orderDetails.clientData.phone}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {orderDetails.clientData.street}, {orderDetails.clientData.city},{" "}
              {orderDetails.clientData.zipCode}
            </p>
            <p>
              <span className="font-semibold">Comment:</span>{" "}
              {orderDetails.clientData.comment}
            </p>
          </div>
        </div>

        {/* Meal Details */}
        <div>
          <p className="font-semibold">Meals:</p>
          <div className="ml-4 space-y-2">
            {orderDetails.meals.map((meal, index) => (
              <div
                key={index}
                className="border border-gray-400 bg-white rounded-md p-4"
              >
                <p>
                  <span className="font-semibold">Dish Name:</span>{" "}
                  {meal.dish.name}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> $
                  {meal.dish.price}
                </p>
                <p>
                  <span className="font-semibold">Calories:</span>{" "}
                  {meal.dish.calories}
                </p>
                <p>
                  <span className="font-semibold">Ingredients:</span>{" "}
                  {meal.dish.ingredients.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Kitchen Type:</span>{" "}
                  {meal.dish.kitchenType}
                </p>
                <p>
                  <span className="font-semibold">Meal Type:</span>{" "}
                  {meal.dish.mealType}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
