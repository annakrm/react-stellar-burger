import { mockedBurgerIngredients } from "../../shared/api/mocks";
import * as types from "../constants";

import {
  selectedBurgerIngredientsReducer,
  initialState,
} from "./selectedBurgerIngredients";

describe("selectedBurgerIngredientsReducer reducer", () => {
  it("should return the initial state", () => {
    expect(selectedBurgerIngredientsReducer(undefined, {})).toEqual(
      initialState
    );
  });

  it("should handle SELECTED_BURGER_INGREDIENTS_ADD_ITEM", () => {
    expect(
      selectedBurgerIngredientsReducer(initialState, {
        type: types.SELECTED_BURGER_INGREDIENTS_RESET_DATA,
      })
    ).toEqual(initialState);
  });

  it("should handle SELECTED_BURGER_INGREDIENTS_UPDATE_DATA", () => {
    const mockedAddedBurgerIngredientsData = [
      {
        ...mockedBurgerIngredients[0],
        uniqueId: "12",
      },
      {
        ...mockedBurgerIngredients[1],
        uniqueId: "123",
      },
      {
        ...mockedBurgerIngredients[2],
        uniqueId: "1234",
      },
      {
        ...mockedBurgerIngredients[3],
        uniqueId: "12345",
      },
      {
        ...mockedBurgerIngredients[4],
        uniqueId: "123456",
      },
    ];

    expect(
      selectedBurgerIngredientsReducer(
        { data: [] },
        {
          type: types.SELECTED_BURGER_INGREDIENTS_UPDATE_DATA,
          data: mockedAddedBurgerIngredientsData,
        }
      )
    ).toEqual({ data: mockedAddedBurgerIngredientsData });
  });
});
