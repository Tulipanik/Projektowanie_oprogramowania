export enum ManagerScreenId {
    MENU,
    ADD_COMPANY,
  }

export type ManagerAppState = {
  screen: ManagerScreenId;
};