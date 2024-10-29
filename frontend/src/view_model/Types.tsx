export enum ScreenId {
  MAINMENU,
  CLIENTLISTWND
}

export enum ActionId {
  ADD,
  UPDNLOGIN,
  UPDNNAME
}

export type Action = {
  id: ActionId;
  data: any | null;
};

export type AppState = {
  screen: ScreenId;
  login: string;
};

export type MenuState = {
  visible: boolean;
};

export class Client {
  login: string = "";
  name: string = "";

  validate() {
    return this.login !== "" && this.name !== "";
  }
}

export class ClientListWndData {
  clients: Client[] = [];
  new_client: Client = new Client();
  filter: string = "";
}
