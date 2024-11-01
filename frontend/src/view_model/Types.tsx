export enum ScreenId {
  MAIN_MENU,
  CLIENT_MAIN_WINDOW,
  CLIENT_DISHES,
}


export type AppState = {
  screen: ScreenId;
  login: string;
};
