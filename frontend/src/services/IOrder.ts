import { orderDTO } from "../view_model/Order";
import { AuthorizationConst } from "./AuthorizationConst";

export interface IOrderAPi {
  placeOrder(order: orderDTO): Promise<number>;
  payForOrder(orderId: number): Promise<boolean>;
}

export class OrderProxy implements IOrderAPi {

  async placeOrder(order: orderDTO): Promise<number> {
    const url = `http://localhost:8080/api/v1/orders`;

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        accept: "*/*",
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${AuthorizationConst.token}`,
      },
      body: JSON.stringify(order)
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: number = await response.json();

      order.orderId = data

      return data;
    }
    catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }


  }

  async payForOrder(orderId: number): Promise<boolean> {
    const url = `http://localhost:8080/api/v1/orders/pay?orderId=${orderId}`;

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        accept: "*/*",
        "Authorization": `Bearer ${AuthorizationConst.token}`,
      }
    };
    let response = await fetch(url, requestOptions);
    if (response.status === 200) {
      return response.json();
    } else {
      return false;
    }
  }
}
