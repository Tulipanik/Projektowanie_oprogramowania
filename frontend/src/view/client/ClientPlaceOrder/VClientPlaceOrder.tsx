import React, { useState } from "react";
import { CClientPlaceOrder } from "../ClientPlaceOrder/CClientPlaceOrder";
import { UCSClientPlaceOrder } from "../../../use_cases/UCSClientPlaceOrder";
import { PClientPlaceOrder } from "../ClientPlaceOrder/PClientPlaceOrder";
import { orderDataDTO } from "../../../view_model/Order";
import { UCSShowClientCart } from "../../../use_cases/UCSShowClientCart";
import { AddressForm } from "./ui/ClientCheckoutForm";
import { ClientViewState } from "../../../view_model/Client";

export function VClientPlaceOrder(
  isActive: boolean,
  ucsShowClientCart: UCSShowClientCart,
  ucsClientPlaceOrder: UCSClientPlaceOrder,
  state: Pick<ClientViewState, "cart" | "error">
) {
  if (!isActive) return;

  const { pressShowClientCartBtn, pressOrderSummaryBtn } = CClientPlaceOrder(
    ucsClientPlaceOrder,
    ucsShowClientCart
  );

  return (
    <div className="p-4">
      <div className="border border-gray-300 p-4 md:p-8 lg:p-16 m-4 md:m-8 lg:m-16 rounded-md shadow-md">
        <h2 className="w-full text-4xl p-4 font-bold text-purple-600 mb-4 border-b-2">
          Address details
        </h2>
        {AddressForm(pressOrderSummaryBtn, state.cart)}
        <div>
          <button
            type="button"
            onClick={pressShowClientCartBtn}
            className="w-full bg-white border-1 border-slate-950 text-grey mx-auto center py-2 rounded-md hover:border-1 flex items-center flex-row justify-center gap-2"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
}
