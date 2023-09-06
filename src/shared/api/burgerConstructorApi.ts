import { getAccessToken } from "../lib/auth";

import type { MakeOrderRequest, MakeOrderResponse } from "./dto";
import { requestWithRefresh } from "./userApi";

const makeOrder = ({
  ingredientIds,
}: MakeOrderRequest): Promise<MakeOrderResponse> => {
  return requestWithRefresh<MakeOrderResponse>("orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: getAccessToken(),
    },
    body: JSON.stringify({ ingredients: ingredientIds }),
  });
};

export const burgerConstructorApi = {
  makeOrder,
};
