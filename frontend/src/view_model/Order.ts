import { OrderDishDTO } from "./Dish";

export interface orderDataDTO {
    city: string;
    clientId: number;
    comment: string;
    email: string;
    name: string;
    phone: string;
    street: string;
    surname: string;
    zipCode: string;
  }

export interface orderDTO {
  clientData: orderDataDTO;
  meals: OrderDishDTO[];
  orderDate: Date;
  orderId: number;
  price: number;
  status: orderStatus;
}
  
export enum orderStatus {
PLACED,
PAID,
IN_REALIZATION,
COMPLETION_IN_PROGRESS,
READY_TO_DELIVER,
RECEIVED_BY_COURIER,
DELIVERED,
}