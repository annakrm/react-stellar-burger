import { mockedBurgerIngredients } from "../../shared/api/mocks";
import * as types from "../constants";

import * as actions from "./burgerIngredientDetails";

describe("Test setBurgerIngredientDetails action", () => {
  it("should create an action with correct data", () => {
    const data = mockedBurgerIngredients[0];

    const expectedAction = {
      type: types.BURGER_INGREDIENT_DETAILS_SET_DATA,
      data,
    };

    expect(actions.setBurgerIngredientDetails(data)).toEqual(expectedAction);
  });
});
