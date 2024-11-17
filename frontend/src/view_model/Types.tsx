export enum ScreenId {
  MAIN_MENU,
  CLIENT_MAIN_WINDOW,
  CLIENT_DISHES,
  CLIENT_CART,
  PLACE_ORDER,
}


export type AppState = {
  screen: ScreenId;
  login: string;
};
