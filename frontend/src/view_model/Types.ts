export enum ScreenId {
  AUTH,
  MAIN_MENU,
  CLIENT_MAIN_WINDOW,
  CLIENT_DISHES,
  CLIENT_CART,
  COURIER_COMPANY_MAIN_WINDOW,
}

export type AppState = {
  screen: ScreenId;
  login: string;
};