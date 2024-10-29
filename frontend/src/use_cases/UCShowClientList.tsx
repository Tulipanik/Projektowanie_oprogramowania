import { PClientListWnd } from "../view/PClientListWnd";
import { PMainMenu } from "../view/PMainMenu";
import { Client } from "../view_model/Types";
import { IClients } from "../services/IClients";

export class UCShowClientList {
  pCLW: PClientListWnd;
  pMM: PMainMenu;
  iCl: IClients;

  constructor(clw: PClientListWnd, mm: PMainMenu, cl: IClients) {
    this.pCLW = clw;
    this.pMM = mm;
    this.iCl = cl;
  }

  showClientListSelected() {
    // here we call the backend API to get the lists
    let list: Client[] = this.iCl.getClientList();
    this.pCLW.showUpdatedClientListWnd(list);
  }

  backSelected() {
    this.pMM.showMainMenu();
  }

  addSelected(client: Client) {
    if (client.validate()) {
      this.iCl.addClient(client);
      this.pCLW.showClientListWndAdd(client);
    } else {
      alert("Incorrect client data!");
    }
  }
}
