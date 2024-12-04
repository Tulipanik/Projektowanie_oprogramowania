import { UCSShowCourierMainWindow } from "../../../use_cases/UCSShowCourierMainWindow";
import { OrderCourierDataDto } from "../../../view_model/Courier";
import { CCourierOrdersList } from "./CCourierOrdersList";


export function VCourierOrdersList(
  isActive: boolean,
  ucsShowCourierMainWindow: UCSShowCourierMainWindow,
  orders: OrderCourierDataDto[],
) {
  if (!isActive) return;

  const { pressBackToMainWindowBtn } = CCourierOrdersList(ucsShowCourierMainWindow);

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
            className="border p-4 rounded shadow-sm"
          >
            <h2 className="text-lg font-semibold">{order.clientName} {order.clientSurname}</h2>
            <p>Phone: <a href={"tel:" + order.phoneNumber} className="underline">{order.phoneNumber}</a></p>
            <p>Address: <a href={"https://www.google.com/maps?q=" + order.address} target="_blank" rel="noreferrer" className="underline">{order.address}</a></p>
          </div>
        ))}
      </div>
    </div>
  )

}