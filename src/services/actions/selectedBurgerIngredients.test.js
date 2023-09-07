import { v4 as uuidv4 } from "uuid";

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
        uniqueId: uuidv4(),
      },
      {
        ...mockedBurgerIngredients[1],
        uniqueId: uuidv4(),
      },
      {
        ...mockedBurgerIngredients[2],
        uniqueId: uuidv4(),
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
