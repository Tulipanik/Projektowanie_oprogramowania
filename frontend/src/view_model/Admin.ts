export enum AdminScreenId {
    MENU,
    ADD_COMPANY,
  }

export type AdminAppState = {
  screen: AdminScreenId;
};