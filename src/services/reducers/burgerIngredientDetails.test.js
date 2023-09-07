import { mockedBurgerIngredients } from "../../shared/api/mocks";
import * as types from "../constants";

import {
  burgerIngredientDetailsReducer,
  initialState,
} from "./burgerIngredientDetails";

describe("burgerIngredientDetailsReducer reducer", () => {
  it("should return the initial state", () => {
    expect(burgerIngredientDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle BURGER_INGREDIENT_DETAILS_SET_DATA", () => {
    const mockedData = mockedBurgerIngredients[0];

    expect(
      burgerIngredientDetailsReducer([], {
        type: types.BURGER_INGREDIENT_DETAILS_SET_DATA,
        data: mockedData,
      })
    ).toEqual({
      data: mockedData,
    });
  });
});
