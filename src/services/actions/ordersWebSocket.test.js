import { mockedOrders } from "../../shared/api/mocks";
import * as types from "../constants";

import * as actions from "./ordersWebSocket";

describe("Test ordersWsConnectionStart action", () => {
  it("should create an action", () => {
    const expectedAction = {
      type: types.ORDERS_WS_CONNECTION_START,
    };

    expect(actions.ordersWsConnectionStart()).toEqual(expectedAction);
  });
});

describe("Test ordersWsConnectionSuccess action", () => {
  it("should create an action", () => {
    const expectedAction = {
      type: types.ORDERS_WS_CONNECTION_SUCCESS,
    };

    expect(actions.ordersWsConnectionSuccess()).toEqual(expectedAction);
  });
});

describe("Test ordersWsConnectionError action", () => {
  it("should create an action", () => {
    const expectedAction = {
      type: types.ORDERS_WS_CONNECTION_ERROR,
    };

    expect(actions.ordersWsConnectionError()).toEqual(expectedAction);
  });
});

describe("Test ordersWsConnectionClosed action", () => {
  it("should create an action", () => {
    const expectedAction = {
      type: types.ORDERS_WS_CONNECTION_CLOSED,
    };

    expect(actions.ordersWsConnectionClosed()).toEqual(expectedAction);
  });
});

describe("Test ordersWsGetMessage action", () => {
  it("should create an action", () => {
    const payload = {
      orders: mockedOrders,
      total: 10,
      totalToday: 100,
    };

    const expectedAction = {
      type: types.ORDERS_WS_GET_MESSAGE,
      payload,
    };

    expect(actions.ordersWsGetMessage(payload)).toEqual(expectedAction);
  });
});

describe("Test ordersWsSendMessage action", () => {
  it("should create an action", () => {
    const payload = [];

    const expectedAction = {
      type: types.ORDERS_WS_SEND_MESSAGE,
      payload,
    };

    expect(actions.ordersWsSendMessage(payload)).toEqual(expectedAction);
  });
});
