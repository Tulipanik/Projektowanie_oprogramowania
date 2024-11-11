export enum ScreenId {
  MAIN_MENU,
  CLIENT_MAIN_WINDOW,
  CLIENT_DISHES,
  CLIENT_CART,
}


export type AppState = {
  screen: ScreenId;
  login: string;
};
