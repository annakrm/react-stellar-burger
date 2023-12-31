import { Action } from "redux";

import type { OrderDto } from "~/shared/api/dto";

export type OrderDetailsState = {
  data: OrderDto | null;
};

export type OrderDetailsAction = Action<string> & OrderDetailsState;

export type SetOrderDetailsAction = (
  data: OrderDto
) => { type: string; data: OrderDto };
