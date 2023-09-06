import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from "../constants";

import * as actions from "./order";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test setOrderDetailsModalOpened action", () => {
  it("should create an action with correct data", () => {
    const orderDetailsModalOpened = true;

    const expectedAction = {
      type: types.ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
      orderDetailsModalOpened,
    };

    expect(actions.setOrderDetailsModalOpened(orderDetailsModalOpened)).toEqual(
      expectedAction
    );
  });
});

describe("Test makeOrder action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should make an order", () => {
    fetchMock.postOnce("/orders", {
      body: JSON.stringify({
        ingredients: [
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa093d",
        ],
      }),
      headers: {
        "content-type": "application/json",
        headers: "Bearer mfowmfpewofimweomfowemfommkweofmwoefm",
      },
    });

    const expectedActions = [
      {
        type: types.MAKE_ORDER_SUCCESS,
        details: { name: "Test name", order: { number: 1 } },
      },
      {
        type: types.ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
        orderDetailsModalOpened: true,
      },
      { type: types.BURGER_CONSTRUCTOR_RESET_DATA },
    ];
    const store = mockStore({
      details: null,
      orderDetailsModalOpened: false,
      error: "",
    });

    // store.dispatch(
    //   actions.makeOrder([
    //     "643d69a5c3f7b9001cfa0943",
    //     "643d69a5c3f7b9001cfa0942",
    //     "643d69a5c3f7b9001cfa093d",
    //   ])
    // );

    // console.log(store);

    // expect(store.getActions()).toEqual(expectedActions);

    return store
      .dispatch(
        actions.makeOrder([
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa093d",
        ])
      )
      .then(() => {
        // Возвращаем асинхронный экшен
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
