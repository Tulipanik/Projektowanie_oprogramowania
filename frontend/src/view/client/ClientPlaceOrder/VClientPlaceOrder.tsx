import React, { useState } from "react";
import { CClientPlaceOrder } from "../ClientPlaceOrder/CClientPlaceOrder";
import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { PClientPlaceOrder } from "../ClientPlaceOrder/PClientPlaceOrder";
import { AddressData } from "../../../view_model/AddressData";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { AddressForm } from "./ui/ClientCheckoutForm"
import { ClientViewState } from "../../../view_model/Client";


export function VClientPlaceOrder(
  isActive: boolean,
  ucsShowClientCart: UCSShowClientCart,
  ucsClientPlaceOrder: UCSClientPlaceOrder,
  state: Pick<ClientViewState, "address">
) {
  if (!isActive) return;

  const {
    handleSubmit,
    pressShowClientCartBtn
  } = CClientPlaceOrder(ucsClientPlaceOrder, ucsShowClientCart);


  return (
    <div className="p-4">
      <div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
        <h2 className="w-full text-4xl p-4 font-bold text-purple-600 mb-4 border-b-2">Dane adresowe</h2>
        {AddressForm(
          state?.address
        )}
        <div><button type="button" onClick={pressShowClientCartBtn} className="w-11/12 bg-grey-600 text-grey mx-auto center py-2 rounded-md hover:bg-violet-700 flex items-center flex-row justify-center gap-2">
          Powrót
        </button>
        </div>
      </div>
    </div>
  );
}
