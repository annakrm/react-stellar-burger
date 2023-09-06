import { v4 as uuidv4 } from "uuid";

import { mockedOrders } from "../../shared/api/mocks";
import * as types from "../constants";

import * as actions from "./selectedBurgerIngredients";

describe("Test addSelectedBurgerIngredientsItem action", () => {
  it("should create an action with correct data", () => {
    const data = {
      ...mockedOrders[0],
      uniqueId: uuidv4(),
    };

    const expectedAction = {
      type: types.SELECTED_BURGER_INGREDIENTS_ADD_ITEM,
      item: data,
    };

    expect(actions.addSelectedBurgerIngredientsItem(data)).toEqual(
      expectedAction
    );
  });
});

describe("Test deleteSelectedBurgerIngredientsItem action", () => {
  it("should create an action with correct data", () => {
    const itemIndex = 1;

    const expectedAction = {
      type: types.SELECTED_BURGER_INGREDIENTS_DELETE_ITEM,
      itemIndex,
    };

    expect(actions.deleteSelectedBurgerIngredientsItem(itemIndex)).toEqual(
      expectedAction
    );
  });
});

describe("Test reorderSelectedBurgerIngredients action", () => {
  it("should create an action with correct data", () => {
    const data = {
      dragIndex: 0,
      hoverIndex: 1,
    };

    const expectedAction = {
      type: types.REORDER_SELECTED_BURGER_INGREDIENTS,
      ...data,
    };

    expect(actions.reorderSelectedBurgerIngredients(data)).toEqual(
      expectedAction
    );
  });
});
