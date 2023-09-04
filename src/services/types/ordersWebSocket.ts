import { Action } from "redux";

import { OrderDto } from "~/shared/api/dto";

export type OrdersWebSocketState = {
  wsConnected: boolean;
  orders: OrderDto[];
  total: number;
  totalToday: number;
};

export type OrdersWebSocketAction = Action<string> &
  OrdersWebSocketState & { payload?: any };
