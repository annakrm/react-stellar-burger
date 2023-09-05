import {
  ORDERS_WS_CONNECTION_SUCCESS,
  ORDERS_WS_CONNECTION_ERROR,
  ORDERS_WS_CONNECTION_CLOSED,
  ORDERS_WS_GET_MESSAGE,
  ORDERS_WS_SEND_MESSAGE,
  ORDERS_WS_CONNECTION_START,
} from "../constants";
import {
  OrdersWsConnectionStartAction,
  OrdersWsConnectionSuccessAction,
  OrdersWsConnectionErrorAction,
  OrdersWsConnectionClosedAction,
  OrdersWsGetMessageAction,
  OrdersWsSendMessageAction,
} from "../types";

export const ordersWsConnectionStart: OrdersWsConnectionStartAction = (url) => {
  return {
    type: ORDERS_WS_CONNECTION_START,
    payload: url,
  };
};

export const ordersWsConnectionSuccess: OrdersWsConnectionSuccessAction = () => {
  return {
    type: ORDERS_WS_CONNECTION_SUCCESS,
  };
};

export const ordersWsConnectionError: OrdersWsConnectionErrorAction = () => {
  return {
    type: ORDERS_WS_CONNECTION_ERROR,
  };
};

export const ordersWsConnectionClosed: OrdersWsConnectionClosedAction = () => {
  return {
    type: ORDERS_WS_CONNECTION_CLOSED,
  };
};

export const ordersWsGetMessage: OrdersWsGetMessageAction = (message) => {
  return {
    type: ORDERS_WS_GET_MESSAGE,
    payload: message,
  };
};

export const ordersWsSendMessage: OrdersWsSendMessageAction = (message) => {
  return {
    type: ORDERS_WS_SEND_MESSAGE,
    payload: message,
  };
};
