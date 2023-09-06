import {
  ORDERS_WS_CONNECTION_SUCCESS,
  ORDERS_WS_CONNECTION_ERROR,
  ORDERS_WS_CONNECTION_CLOSED,
  ORDERS_WS_GET_MESSAGE,
} from "../constants";
import { OrdersWebSocketAction, OrdersWebSocketState } from "../types";

const initialState: OrdersWebSocketState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const ordersWebSocketReducer = (
  state = initialState,
  action: OrdersWebSocketAction
): OrdersWebSocketState => {
  switch (action.type) {
    case ORDERS_WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case ORDERS_WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case ORDERS_WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case ORDERS_WS_GET_MESSAGE: {
      const { orders, total, totalToday } = action;

      return {
        ...state,
        orders,
        total,
        totalToday,
      };
    }

    default:
      return state;
  }
};
