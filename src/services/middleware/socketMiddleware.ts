import { OrderDto } from "~/shared/api/dto";
import { getAccessToken } from "~/shared/lib/auth";

import { AppStore } from "../types";

type WebSocketNextActionFunc = (action: WebSocketAction) => void;

type WebSocketAction = { type: string; payload: any; allOrdersMode?: boolean }; // eslint-disable-line @typescript-eslint/no-explicit-any

type WebSocketActions = {
  wsInit: string;
  wsSendMessage: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
};

type FeedWebSocketData = {
  success: boolean;
  orders: OrderDto[];
  total: number;
  totalToday: number;
};

export const socketMiddleware = (
  wsUrl: string,
  wsActions: WebSocketActions
) => {
  return (
    store: AppStore
  ): ((next: WebSocketNextActionFunc) => (action: WebSocketAction) => void) => {
    let socket = null;

    return (next: WebSocketNextActionFunc) => (action: WebSocketAction) => {
      const { dispatch } = store;
      const { type, payload } = action;

      const {
        wsInit,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage,
      } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData: FeedWebSocketData = JSON.parse(data);
          const { orders, total, totalToday } = parsedData; // eslint-disable-line @typescript-eslint/no-unused-vars

          dispatch({ type: onMessage, orders, total, totalToday });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const accessToken = getAccessToken();
          const message = { ...payload, token: accessToken };

          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};
