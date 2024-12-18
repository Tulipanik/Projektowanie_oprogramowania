import { MOCK_FIND_DISH_DTO } from "../mock/findDishDto.mock";
import { FindDishDTO } from "./Dish";
import { orderStatus } from "./Order";

export interface OrderCourierDataDto {
  address: string,
  clientName: string,
  clientSurname: string,
  courierId: number,
  orderId: number,
  phoneNumber: string,
  mealList: FindDishDTO[],
  orderStatus: orderStatus,
}

export enum CourierScreenId {
  MAIN_WINDOW = "MAIN_WINDOW",
  ORDER_LIST = "ORDER_LIST"
}

export class CourierViewState {
  screenId: CourierScreenId = CourierScreenId.MAIN_WINDOW;
  orders: OrderCourierDataDto[] = [];
}

export interface UpdateCourierViewAction {
  type: "CHANGE_SCREEN" | "UPDATE_ORDERS";
  screen?: CourierScreenId;
  orders?: OrderCourierDataDto[];
}

export const ORDER_COURIER_DATA_MOCK: OrderCourierDataDto[] = [
  {
    address: "123 Main St",
    clientName: "John",
    clientSurname: "Doe",
    courierId: 1,
    orderId: 101,
    phoneNumber: "555-1234",
    mealList: MOCK_FIND_DISH_DTO,
    orderStatus: orderStatus.RECEIVED_BY_COURIER
  },
  {
    address: "456 Elm St",
    clientName: "Jane",
    clientSurname: "Smith",
    courierId: 2,
    orderId: 102,
    phoneNumber: "555-5678",
    mealList: [],
    orderStatus: orderStatus.RECEIVED_BY_COURIER
  },
  {
    address: "789 Oak St",
    clientName: "Alice",
    clientSurname: "Johnson",
    courierId: 3,
    orderId: 103,
    phoneNumber: "555-8765",
    mealList: [],
    orderStatus: orderStatus.RECEIVED_BY_COURIER
  },
  {
    address: "321 Pine St",
    clientName: "Bob",
    clientSurname: "Brown",
    courierId: 4,
    orderId: 104,
    phoneNumber: "555-4321",
    mealList: MOCK_FIND_DISH_DTO,
    orderStatus: orderStatus.RECEIVED_BY_COURIER
  },
  {
    address: "654 Maple St",
    clientName: "Charlie",
    clientSurname: "Davis",
    courierId: 5,
    orderId: 105,
    phoneNumber: "555-6789",
    mealList: [],
    orderStatus: orderStatus.RECEIVED_BY_COURIER
  }
]