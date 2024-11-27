import { orderDTO } from "../view_model/Order";

export interface IOrderAPi {
  placeOrder(order: orderDTO): Promise<number>;
}

export class OrderProxy implements IOrderAPi {
  placeOrder(order: orderDTO): Promise<number> {
    return new Promise((resolve, reject) => {
      const randomOrderId = Math.floor(Math.random() * 10) + 1;
      console.log(randomOrderId);
      resolve(randomOrderId); // TODO: zwracaj id zamowienia
    });
  }
}
