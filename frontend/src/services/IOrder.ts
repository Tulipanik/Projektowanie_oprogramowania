import { orderDTO } from "../view_model/Order";

export interface IOrderAPi {
  placeOrder(order: orderDTO): Promise<number>;
  payForOrder(orderId: number): Promise<boolean>;
}

export class OrderProxy implements IOrderAPi {
  placeOrder(order: orderDTO): Promise<number> {
    return new Promise((resolve, reject) => {
      const randomOrderId = Math.floor(Math.random() * 10) + 1;
      console.log(randomOrderId);
      resolve(randomOrderId); // TODO: zwracaj id zamowienia
    });
  }

  async payForOrder(orderId: number): Promise<boolean> {
    const url = `http://localhost:8080/api/v1/orders/pay?orderId=${orderId}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'accept': '*/*'
        }
      });
      return response.json();
    } catch(error) {
      return new Promise((resolve, reject) => {
        resolve(false);
      });
    }
  }
}
