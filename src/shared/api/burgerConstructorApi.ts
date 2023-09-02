import type { MakeOrderRequest, MakeOrderResponse } from "./dto";
import { request } from "./lib";

const makeOrder = ({
  ingredientIds,
}: MakeOrderRequest): Promise<MakeOrderResponse> => {
  return request<MakeOrderResponse>("orders", {
    method: "POST",
    body: JSON.stringify({ ingredients: ingredientIds }),
  });
};

export const burgerConstructorApi = {
  makeOrder,
};
