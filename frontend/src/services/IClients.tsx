import { Client } from "../view_model/Types";

export interface IClients {
  getClientList(): Client[];
  addClient(cl: Client): void;
}

export class ClientsProxy implements IClients {
  clientList: Client[];

  constructor() {
    let client: Client = new Client();
    client.login = "kowal";
    client.name = "Kowalski";
    this.clientList = [client];
  }

  getClientList(): Client[] {
    return Object.create(this.clientList);
  }

  addClient(cl: Client): void {
    let cll: Client[] = Object.create(this.clientList);
    cll.push(cl);
    this.clientList = cll;
  }
}
