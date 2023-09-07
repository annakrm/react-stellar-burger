import { mockedOrders } from "../../shared/api/mocks";
import * as types from "../constants";

import * as actions from "./orderDetails";

describe("Test setOrderDetails action", () => {
  it("should create an action with correct data", () => {
    const data = mockedOrders[0];

    const expectedAction = {
      type: types.ORDER_DETAILS_SET_DATA,
      data,
    };

    expect(actions.setOrderDetails(data)).toEqual(expectedAction);
  });
});
