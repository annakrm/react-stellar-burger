import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { mockedBurgerIngredients } from "../../shared/api/mocks";
import * as types from "../constants";

import * as actions from "./burgerIngredients";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test setBurgerIngredientsActiveTab action", () => {
  it("should create an action with correct data", () => {
    const activeTab = "BUNS";

    const expectedAction = {
      type: types.BURGER_INGREDIENTS_SET_ACTIVE_TAB,
      activeTab,
    };

    expect(actions.setBurgerIngredientsActiveTab(activeTab)).toEqual(
      expectedAction
    );
  });
});

describe("Test getBurgerIngredients action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should fetch burger ingredients data", () => {
    fetchMock.getOnce("https://norma.nomoreparties.space/api/ingredients", {
      body: { data: mockedBurgerIngredients },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedActions = [
      {
        type: types.BURGER_INGREDIENTS_GET_DATA_SUCCESS,
        data: mockedBurgerIngredients,
      },
    ];

    const store = mockStore({});

    return store.dispatch(actions.getBurgerIngredients()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
