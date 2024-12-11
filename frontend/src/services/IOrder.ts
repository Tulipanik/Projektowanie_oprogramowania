import { orderDTO, storekeeperOrderDTO } from "../view_model/Order";
import { OrderCourierDataDto } from "../view_model/Courier";
import { AuthorizationConst } from "./AuthorizationConst";

export interface IOrderAPi {
  placeOrder(order: orderDTO): Promise<number>;
  payForOrder(orderId: number): Promise<boolean>;
  getOrdersForCourier(courierId: number): Promise<OrderCourierDataDto[]>;
  getOrdersForClient(clientId: number): Promise<orderDTO[]>;
  getOrderData(orderId: number): Promise<orderDTO>;
  setOrderStatus(orderId: number, status: string): Promise<boolean>;
  getOrdersForStorekeeper(storekeeperId: number): Promise<storekeeperOrderDTO[]>
}

export class OrderProxy implements IOrderAPi {
  async placeOrder(order: orderDTO): Promise<number> {
    const url = `http://localhost:8080/api/v1/orders`;

    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${AuthorizationConst.token}`,
      },
      body: JSON.stringify(order),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: number = await response.json();

      order.orderId = data;

      return data;
    } catch (error) {
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
        Authorization: `Bearer ${AuthorizationConst.token}`,
      },
    };
    let response = await fetch(url, requestOptions);
    if (response.status === 200) {
      return response.json();
    } else {
      return false;
    }
  }


  async getOrdersForCourier(courierId: number): Promise<OrderCourierDataDto[]> {
    const url = `http://localhost:8080/api/v1/orders/courier/${courierId}`;

    // return new Promise((resolve, reject) => { resolve(ORDER_COURIER_DATA_MOCK) });

    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        accept: "*/*",
        "Authorization": `Bearer ${AuthorizationConst.token}`,
      }
    };
    let response = await fetch(url, requestOptions);
    if (response.ok) {
      return response.json() as Promise<OrderCourierDataDto[]>;
    } else {
      return [];
    }
  }

  async getOrdersForClient(clientId: number): Promise<orderDTO[]> {
    const url = `http://localhost:8080/api/v1/orders/client/${clientId}`;

    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${AuthorizationConst.token}`,
      },
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: orderDTO[] = await response.json();

      return data;
    } catch (error) {
      console.error("Error getting orders:", error);
      throw error;
    }
  }

  async getOrderData(orderId: number): Promise<orderDTO> {
    const url = `http://localhost:8080/api/v1/orders/1`;

    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${AuthorizationConst.token}`,
      },
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: orderDTO = await response.json();

      return data;
    } catch (error) {
      console.error("Error getting order data:", error);
      throw error;
    }
  }

  async setOrderStatus(orderId: number, status: string): Promise<boolean> {
      const url = `http://localhost:8080/api/v1/orders/${orderId}/status`;

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${AuthorizationConst.token}`,
        },
        body: status,
      };
      let response = await fetch(url, requestOptions);
      if (response.status === 200) {
        return response.json();
      } else {
        return false;
      }
  }

  async getOrdersForStorekeeper(storekeeperId: number): Promise<storekeeperOrderDTO[]> {
    const url = `http://localhost:8080/api/v1/orders/storekeeper/${storekeeperId}`;

    const requestOptions: RequestInit = {
      method: "GET",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${AuthorizationConst.token}`,
      },
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: storekeeperOrderDTO[] = await response.json();
      console.log("otrzymałem z backendu: ", data)

      return data;
    } catch (error) {
      console.error("Error getting orders:", error);
      throw error;
    }
  }

}
