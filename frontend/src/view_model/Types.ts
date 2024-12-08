export enum ScreenId {
  AUTH,
  MAIN_MENU,
  CLIENT_MAIN_WINDOW,
  CLIENT_DISHES,
  CLIENT_CART,
  CATERING_COMPANY_MAIN_WINDOW,
  ADMIN_MAIN_WINDOW,
}

export type AppState = {
  screen: ScreenId;
  login: string;
};
