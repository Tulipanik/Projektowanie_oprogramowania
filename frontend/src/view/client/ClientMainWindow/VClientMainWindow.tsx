import { useReducer } from "react";
import { DishesProxy, IDishesApi } from "../../../services/IDishes";
import { UCSShowClientDishList } from "../../../use_cases/UCSShowClientDishList";
import { ClientScreenId, ClientViewState } from "../../../view_model/Client";
import { PClientDishes } from "../ClientDishes/PClientDishes";
import { VClientMenu } from "../ClientMenu/VClientMenu";
import { updateClientViewState } from "./CClientMainWindow";
import { PClientMainWindow } from "./PClientMainWindow";
import { VClientDishes } from "../ClientDishes/VClientDishes";
import { UCShowClientMainWindow } from "../../../use_cases/UCSShowClientWindow";
import { CartProxy, ICartApi } from "../../../services/ICart";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { PClientCart } from "../ClientCart/PClientCart";
import { VClientCart } from "../ClientCart/VClientCart";
import { VClientPlaceOrder } from "../ClientPlaceOrder/VClientPlaceOrder";
import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { PClientPlaceOrder } from "../ClientPlaceOrder/PClientPlaceOrder";
import { IOrderAPi, OrderProxy } from "../../../services/IOrder";
import { VOrderNotPlacedWindow } from "../ClientPlaceOrder/OrderNotPlacedWindow/VOrderNotPlacedWindow";
import { VOrderPlacedWindow } from "../ClientPlaceOrder/OrderPlacedWindow/VOrderPlacedWindow";
import { VOrderSummaryWindow } from "../ClientPlaceOrder/OrderSummaryWindow/VOrderSummaryWindow";
import { PClientPayForOrder } from "../ClientPayForOrder/PClientPayForOrder";
import { UCSClientPayForOrder } from "../../../use_cases/UCSClientPayForOrder";
import { VClientPayForOrder } from "../ClientPayForOrder/VClientPayForOrder";
import { VOrderPaidWindow } from "../ClientPayForOrder/OrderPaidWindow/VOrderPaidWindow";
import { VOrderNotPaidWindow } from "../ClientPayForOrder/OrderNotPaidWindow/VOrderNotPaidWindow";
import { UCShowClientOrderList } from "../../../use_cases/UCSShowClientOrderList";
import { PClientOrders } from "../ClientOrders/PClientOrders";
import { VClientOrders } from "../ClientOrders/VClientOrders";
import { PClientOrderDetails } from "../ClientOrders/ClientOrderDetails/PClientOrderDetails";
import { UCShowClientOrderDetails } from "../../../use_cases/UCSShowClientOrderDetails";
import { VClientOrderDetails } from "../ClientOrders/ClientOrderDetails/VClientOrderDetails";

const pClientDishes = new PClientDishes();
const pClientOrderDetails = new PClientOrderDetails();
const pClientOrders = new PClientOrders();
const pClientCart = new PClientCart();
const pClientPlaceOrder = new PClientPlaceOrder();
const pClientPayForOrder = new PClientPayForOrder();
const iDishes: IDishesApi = new DishesProxy();
const iCart: ICartApi = new CartProxy();
const iOrder: IOrderAPi = new OrderProxy();
const ucsShowClientDishList = new UCSShowClientDishList(
  pClientDishes,
  iDishes,
  iCart
);
const ucsShowClientCart = new UCSShowClientCart(pClientCart, iCart);
const ucsClientPlaceOrder = new UCSClientPlaceOrder(pClientPlaceOrder, iOrder);
const ucsClientPayForOrder = new UCSClientPayForOrder(
  pClientPayForOrder,
  iOrder
);
const ucsShowClientOrderList = new UCShowClientOrderList(pClientOrders, iOrder);
const ucsShowClientOrderDetails = new UCShowClientOrderDetails(
  iOrder,
  pClientOrderDetails
);

export function VClientMainWindow(
  isActive: boolean,
  ucshowClientMainWindow: UCShowClientMainWindow,
  pClientMainWindow: PClientMainWindow
) {
  const [clientState, clientStateUpdate] = useReducer(
    updateClientViewState,
    new ClientViewState()
  );

  if (!isActive) return;

  pClientDishes.injectClientDispatch(clientStateUpdate);
  pClientOrders.injectClientDispatch(clientStateUpdate);
  pClientOrderDetails.injectClientDispatch(clientStateUpdate);
  pClientCart.injectClientDispatch(clientStateUpdate);
  pClientMainWindow.injectClientDispatch(clientStateUpdate);
  pClientPlaceOrder.injectClientDispatch(clientStateUpdate);
  pClientPayForOrder.injectClientDispatch(clientStateUpdate);

  return (
    <div>
      {VClientMenu(
        clientState.screen === ClientScreenId.MAIN_WINDOW,
        ucshowClientMainWindow,
        ucsShowClientDishList,
        ucsShowClientCart,
        ucsShowClientOrderList
      )}
      {VClientOrders(
        clientState.screen === ClientScreenId.ORDERS,
        {
          orderList: clientState.orderList,
        },
        ucsShowClientOrderDetails,
        ucshowClientMainWindow
      )}
      {VClientOrderDetails(
        clientState.screen === ClientScreenId.ORDER_DETAILS,
        {
          orderDetails: clientState.orderDetails,
        },
        ucsShowClientOrderList
      )}
      {VClientDishes(
        clientState.screen === ClientScreenId.DISHES,
        ucsShowClientDishList,
        ucshowClientMainWindow,
        ucsShowClientCart,
        {
          dishes: clientState.dishes,
          filters: clientState.filters,
          selectOptions: clientState.selectOptions,
        }
      )}
      {VClientCart(
        clientState.screen === ClientScreenId.CART,
        ucsShowClientCart,
        ucshowClientMainWindow,
        ucsShowClientDishList,
        ucsClientPlaceOrder,
        { cart: clientState.cart, error: clientState.error }
      )}
      {VClientPlaceOrder(
        clientState.screen === ClientScreenId.ADDRESS_FORM,
        ucsShowClientCart,
        ucsClientPlaceOrder,
        { cart: clientState.cart, error: clientState.error }
      )}
      {/* {VOrderPlacedWindow(
        clientState.screen === ClientScreenId.PLACE_ORDER_SUCESS
      )} */}
      {VOrderNotPlacedWindow(
        clientState.screen === ClientScreenId.PLACE_ORDER_FAIL,
        ucsShowClientCart,
        ucshowClientMainWindow,
        ucsShowClientDishList,
        ucsClientPlaceOrder
      )}
      {VOrderSummaryWindow(
        clientState.screen === ClientScreenId.ORDER_SUMMARY,
        ucsClientPlaceOrder,
        ucsShowClientCart,
        {
          cart: clientState.cart,
          error: clientState.error,
          order: clientState.order,
        }
      )}
      {VClientPayForOrder(
        clientState.screen === ClientScreenId.PLACE_ORDER_SUCESS,
        ucsClientPayForOrder,
        ucshowClientMainWindow,
        { order: clientState.order }
      )}
      {VOrderPaidWindow(
        clientState.screen === ClientScreenId.PAY_ORDER_SUCCESS,
        ucshowClientMainWindow,
        ucsClientPayForOrder
      )}
      {VOrderNotPaidWindow(
        clientState.screen === ClientScreenId.PAY_ORDER_FAIL,
        ucshowClientMainWindow,
        ucsClientPayForOrder,
        { order: clientState.order }
      )}
    </div>
  );
}
