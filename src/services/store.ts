import { Store, applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import {
  ORDERS_WS_CONNECTION_CLOSED,
  ORDERS_WS_CONNECTION_ERROR,
  ORDERS_WS_CONNECTION_START,
  ORDERS_WS_CONNECTION_SUCCESS,
  ORDERS_WS_GET_MESSAGE,
  ORDERS_WS_SEND_MESSAGE,
} from "./constants";
import { socketMiddleware } from "./middleware";
import { rootReducer } from "./reducers";
import { RootState } from "./types";

const ordersWebSocketUrl = "wss://norma.nomoreparties.space/orders";

const ordersWebSocketActions = {
  wsInit: ORDERS_WS_CONNECTION_START,
  wsSendMessage: ORDERS_WS_SEND_MESSAGE,
  onOpen: ORDERS_WS_CONNECTION_SUCCESS,
  onClose: ORDERS_WS_CONNECTION_CLOSED,
  onError: ORDERS_WS_CONNECTION_ERROR,
  onMessage: ORDERS_WS_GET_MESSAGE,
};

export const initStore = (initialState = {}): Store<RootState> =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        socketMiddleware(ordersWebSocketUrl, ordersWebSocketActions)
      )
    )
  );
