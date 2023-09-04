import {
  ORDERS_WS_CONNECTION_SUCCESS,
  ORDERS_WS_CONNECTION_ERROR,
  ORDERS_WS_CONNECTION_CLOSED,
  ORDERS_WS_GET_MESSAGE,
  ORDERS_WS_SEND_MESSAGE,
  ORDERS_WS_CONNECTION_START,
} from "../constants";

export const ordersAllWsConnectionStart = (): {
  type: string;
  allOrdersMode?: boolean;
} => {
  return {
    type: ORDERS_WS_CONNECTION_START,
    allOrdersMode: true,
  };
};

export const ordersWsConnectionStart = (): { type: string } => {
  return {
    type: ORDERS_WS_CONNECTION_START,
  };
};

export const ordersWsConnectionSuccess = (): { type: string } => {
  return {
    type: ORDERS_WS_CONNECTION_SUCCESS,
  };
};

export const ordersWsConnectionError = (): { type: string } => {
  return {
    type: ORDERS_WS_CONNECTION_ERROR,
  };
};

export const ordersWsConnectionClosed = (): { type: string } => {
  return {
    type: ORDERS_WS_CONNECTION_CLOSED,
  };
};

export const ordersWsGetMessage = (message): { type: string; payload: any } => {
  return {
    type: ORDERS_WS_GET_MESSAGE,
    payload: message,
  };
};

export const ordersWsSendMessage = (
  message
): { type: string; payload: any } => {
  return {
    type: ORDERS_WS_SEND_MESSAGE,
    payload: message,
  };
};
