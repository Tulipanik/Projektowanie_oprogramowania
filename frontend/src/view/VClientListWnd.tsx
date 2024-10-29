import "../styles.css";
import { useReducer } from "react";
import { ActionId, ClientListWndData } from "../view_model/Types";
import { CClientListWnd, updateClwView } from "./CClientListWnd";
import { UCShowClientList } from "../use_cases/UCShowClientList";
import { PClientListWnd } from "./PClientListWnd";

export default function VClientListWnd(
  isActive: boolean,
  pCLW: PClientListWnd,
  ucSCL: UCShowClientList
) {
  const emptyData: ClientListWndData = new ClientListWndData();
  const [clwData, clwUpdateView] = useReducer(updateClwView, emptyData);

  pCLW.injectDataHandles(clwData, clwUpdateView);

  if (!isActive) return;

  const [backSelected, addSelected] = CClientListWnd(clwData, ucSCL);
  return (
    <div className="MainMenu">
      <h2>User list:</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>No.</th>
            <th>Login</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {clwData.clients &&
            clwData.clients.map((user, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.login}</td>
                <td>{user.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <label>
        Enter new user:
        <input
          type="text"
          value={clwData.new_client.login}
          onChange={(e) => {
            clwData.new_client.login = e.target.value;
            clwUpdateView(ActionId.UPDNLOGIN);
          }}
        />
        <input
          type="text"
          value={clwData.new_client.name}
          onChange={(e) => {
            clwData.new_client.name = e.target.value;
            clwUpdateView(ActionId.UPDNNAME);
          }}
        />
      </label>

      <button
        onClick={addSelected}
        //() => {
        //clientListDispatch(ActionId.REFRESH);
      >
        Add
      </button>
      <button
        onClick={backSelected}
        //() => {
        //clientListDispatch(ActionId.REFRESH);
        //}
      >
        Back
      </button>
    </div>
  );
}
