import { mockedBurgerIngredients } from "../../shared/api/mocks";
import * as types from "../constants";

import * as actions from "./selectedBurgerIngredients";

describe("Test resetSelectedBurgerIngredientsData action", () => {
  it("should create an action with correct data", () => {
    const expectedAction = {
      type: types.SELECTED_BURGER_INGREDIENTS_RESET_DATA,
    };

    expect(actions.resetSelectedBurgerIngredientsData()).toEqual(
      expectedAction
    );
  });
});

describe("Test updateSelectedBurgerIngredientsItem action", () => {
  it("should create an action with correct data", () => {
    const data = [
      {
        ...mockedBurgerIngredients[0],
        uniqueId: "1",
      },
      {
        ...mockedBurgerIngredients[1],
        uniqueId: "12",
      },
      {
        ...mockedBurgerIngredients[2],
        uniqueId: "123",
      },
    ];

    const expectedAction = {
      type: types.SELECTED_BURGER_INGREDIENTS_UPDATE_DATA,
      data,
    };

    expect(actions.updateSelectedBurgerIngredientsData(data)).toEqual(
      expectedAction
    );
  });
});
