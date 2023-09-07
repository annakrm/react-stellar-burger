import { mockedOrders } from "../../shared/api/mocks";
import * as types from "../constants";

import { orderDetailsReducer, initialState } from "./orderDetails";

describe("orderDetailsReducer reducer", () => {
  it("should return the initial state", () => {
    expect(orderDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ORDER_DETAILS_SET_DATA", () => {
    const mockedData = mockedOrders[0];

    expect(
      orderDetailsReducer([], {
        type: types.ORDER_DETAILS_SET_DATA,
        data: mockedData,
      })
    ).toEqual({
      data: mockedData,
    });
  });
});
