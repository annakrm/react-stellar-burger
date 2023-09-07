import { mockedOrders } from "../../shared/api/mocks";
import * as types from "../constants";

import { ordersWebSocketReducer, initialState } from "./ordersWebSocket";

describe("ordersWebSocketReducer reducer", () => {
  it("should return the initial state", () => {
    expect(ordersWebSocketReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ORDERS_WS_CONNECTION_SUCCESS", () => {
    expect(
      ordersWebSocketReducer(initialState, {
        type: types.ORDERS_WS_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("should handle ORDERS_WS_CONNECTION_ERROR", () => {
    expect(
      ordersWebSocketReducer(initialState, {
        type: types.ORDERS_WS_CONNECTION_ERROR,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("should handle ORDERS_WS_CONNECTION_CLOSED", () => {
    expect(
      ordersWebSocketReducer(initialState, {
        type: types.ORDERS_WS_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it("should handle ORDERS_WS_GET_MESSAGE", () => {
    expect(
      ordersWebSocketReducer(initialState, {
        type: types.ORDERS_WS_GET_MESSAGE,
        orders: mockedOrders,
        total: 10,
        totalToday: 20,
      })
    ).toEqual({
      ...initialState,
      orders: mockedOrders,
      total: 10,
      totalToday: 20,
    });
  });
});
