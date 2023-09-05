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

export type OrdersAllWsConnectionStartAction = () => {
  type: string;
  allOrdersMode?: boolean;
};
export type OrdersWsConnectionStartAction = (url: string) => { type: string };
export type OrdersWsConnectionSuccessAction = () => { type: string };
export type OrdersWsConnectionErrorAction = () => { type: string };
export type OrdersWsConnectionClosedAction = () => { type: string };
export type OrdersWsGetMessageAction = (
  message
) => { type: string; payload: any };
export type OrdersWsSendMessageAction = (
  message
) => { type: string; payload: any };
