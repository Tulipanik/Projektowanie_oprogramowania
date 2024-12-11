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
  orderId?: number;
  price: number;
  status: orderStatus;
}
  
export interface storekeeperOrderDTO {
  meals: string[];
  mealsIds: number[];
  orderId: number;
}

export enum orderStatus {
PLACED = "PLACED",
PAID = "PAID",
IN_REALIZATION = "IN_REALIZATION",
READY_TO_DELIVER = "READY_TO_DELIVER",
RECEIVED_BY_COURIER= "RECEIVED_BY_COURIER",
DELIVERED = "DELIVERED",
COMPLETION_IN_PROGRESS = "COMPLETION_IN_PROGRESS",
}