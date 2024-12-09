import { UCSShowCourierMainWindow } from "../../../use_cases/UCSShowCourierMainWindow";
import { OrderCourierDataDto } from "../../../view_model/Courier";
import { upperSnakeCaseToCapitalized } from "../../client/ClientDishes/ui/ClientDishesForm";
import { CCourierOrdersList } from "./CCourierOrdersList";


export function VCourierOrdersList(
  isActive: boolean,
  ucsShowCourierMainWindow: UCSShowCourierMainWindow,
  orders: OrderCourierDataDto[],
) {
  if (!isActive) return;

  const { pressBackToMainWindowBtn } = CCourierOrdersList(ucsShowCourierMainWindow);

  if (orders.length === 0) {
    return (
      <div className="p-4">
        <header className="flex items-center mb-4">
          <button
            onClick={pressBackToMainWindowBtn}
            className="flex items-center text-orange-400 hover:text-orange-500">
            <span className="material-icons">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold">Orders List</h1>
        </header>
        <div className="p-4 text-center">
          <p>No orders</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <header className="flex items-center mb-4">
        <button
          onClick={pressBackToMainWindowBtn}
          className="flex items-center text-orange-400 hover:text-orange-500">
          <span className="material-icons">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold">Orders List</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="border p-4 rounded shadow-sm text-left"
          >
            <h2 className="text-lg font-semibold">{order.clientName} {order.clientSurname}</h2>
            <p>Phone: <a href={"tel:" + order.phoneNumber} className="underline">{order.phoneNumber}</a></p>
            <p>Address: <a href={"https://www.google.com/maps?q=" + order.address} target="_blank" rel="noreferrer" className="underline">{order.address}</a></p>
            <p>Status: {upperSnakeCaseToCapitalized(order.orderStatus?.toString())}</p>
            <hr />
            <h3 className="font-semibold">Meals:</h3>
            {order?.mealList.length === 0 && <p>No meals</p>}
            <ul>
              {order?.mealList.map((meal) => (
                <li key={meal.dishId}>{meal.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )

}