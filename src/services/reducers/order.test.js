import * as types from "../constants";

import { orderReducer, initialState } from "./order";

describe("orderReducer reducer", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle MAKE_ORDER_SUCCESS", () => {
    const mockedOrderDetails = {
      name: "Mocked name",
      order: {
        number: 1,
      },
    };

    expect(
      orderReducer(initialState, {
        type: types.MAKE_ORDER_SUCCESS,
        details: mockedOrderDetails,
      })
    ).toEqual({
      ...initialState,
      details: mockedOrderDetails,
    });
  });

  it("should handle MAKE_ORDER_FAILED", () => {
    expect(
      orderReducer(initialState, {
        type: types.MAKE_ORDER_FAILED,
        error: "Error!",
      })
    ).toEqual(initialState);
  });

  it("should handle ORDER_DETAILS_MODAL_OPENED_SET_VALUE", () => {
    expect(
      orderReducer(initialState, {
        type: types.ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
        orderDetailsModalOpened: true,
      })
    ).toEqual({ ...initialState, orderDetailsModalOpened: true });
  });
});
