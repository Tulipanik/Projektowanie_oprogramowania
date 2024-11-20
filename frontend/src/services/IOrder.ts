import { randomInt } from "crypto";
import { orderDTO } from "../view_model/Order";

export interface IOrderAPi{
    placeOrder(): Promise<number>; // TODO: funkcja przyjmuje obiekt orderData: orderDTO
}  

export class OrderProxy implements IOrderAPi {
    placeOrder(): Promise<number> { // TODO: funkcja przyjmuje obiekt orderData: orderDTO

        return new Promise((resolve,reject) => {
            const randomOrderId = Math.floor(Math.random() * 10) + 1;
            console.log(randomOrderId);
            resolve(randomOrderId)// TODO: zwracaj id zamowienia
        });
    }
}