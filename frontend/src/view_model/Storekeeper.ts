import { storekeeperOrderDTO } from "./Order";

export enum StorekeeperScreenId {
    MAIN_WINDOW = "MAIN_WINDOW",
    CHANGE_ORDER_STATUS_LIST= "CHANGE_ORDER_STATUS_LIST",
    STATUS_CHANGE_SUCCESS = "STATUS_CHANGE_SUCCESS",
    STATUS_CHANGE_FAIL = "STATUS_CHANGE_FAIL"
}

export class StorekeeperViewState {
    screen: StorekeeperScreenId = StorekeeperScreenId.MAIN_WINDOW;
    orderList: storekeeperOrderDTO[] = [];
}

export interface UpdateStorekeeperViewAction {
    type:
        "UPDATE_ORDER_LIST"
    |   "CHANGE_SCREEN"
    screen?: StorekeeperScreenId;
    orderList?: storekeeperOrderDTO[];
}