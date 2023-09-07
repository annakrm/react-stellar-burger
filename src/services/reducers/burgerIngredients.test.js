import { mockedBurgerIngredients } from "../../shared/api/mocks";
import * as types from "../constants";

import { burgerIngredientsReducer, initialState } from "./burgerIngredients";

describe("burgerIngredientsReducer reducer", () => {
  it("should return the initial state", () => {
    expect(burgerIngredientsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle BURGER_INGREDIENTS_GET_DATA_SUCCESS", () => {
    expect(
      burgerIngredientsReducer(initialState, {
        type: types.BURGER_INGREDIENTS_GET_DATA_SUCCESS,
        data: mockedBurgerIngredients,
      })
    ).toEqual({
      ...initialState,
      data: mockedBurgerIngredients,
    });
  });

  it("should handle BURGER_INGREDIENTS_GET_DATA_FAILED", () => {
    expect(
      burgerIngredientsReducer(initialState, {
        type: types.BURGER_INGREDIENTS_GET_DATA_FAILED,
        error: "Error!",
      })
    ).toEqual(initialState);
  });

  it("should handle BURGER_INGREDIENTS_SET_ACTIVE_TAB", () => {
    expect(
      burgerIngredientsReducer(initialState, {
        type: types.BURGER_INGREDIENTS_SET_ACTIVE_TAB,
        activeTab: "MAIN",
      })
    ).toEqual({ ...initialState, activeTab: "MAIN" });
  });
});
