import { Dispatch } from "react";
import {
  ActionId,
  Client,
  ClientListWndData,
  ScreenId
} from "../view_model/Types";
import { PresentationDispatcher } from "./PresentationDispatcher";

export class PClientListWnd extends PresentationDispatcher {
  data!: ClientListWndData;
  uView!: Dispatch<ActionId>;

  injectDataHandles(d: ClientListWndData, uv: Dispatch<ActionId>) {
    this.data = d;
    this.uView = uv;
  }

  showEmptyClientListWnd() {
    this.data.clients = [];
    alert("empty data!");
    this.gUpdateView?.(ScreenId.CLIENTLISTWND);
  }

  showPreviousClientListWnd() {
    this.gUpdateView?.(ScreenId.CLIENTLISTWND);
  }

  showUpdatedClientListWnd(list: Client[]) {
    this.data.clients = list;
    this.gUpdateView?.(ScreenId.CLIENTLISTWND);
  }

  showClientListWndAdd(client: Client) {
    alert(client.name);
    this.data.clients.push(client);
    this.gUpdateView?.(ScreenId.CLIENTLISTWND);
  }
}
