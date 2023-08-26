// reducer.js
import { Action } from "redux";

import { BurgerIngredient } from "../../shared/lib/types";
import { BURGER_INGREDIENT_DETAILS_SET_DATA } from "../constants";

type ReducerState = {
  data: BurgerIngredient | null;
};

type ReducerAction = Action<string> & ReducerState;

const initialState: ReducerState = {
  data: null,
};

export const burgerIngredientDetailsReducer = (
  state = initialState,
  action: ReducerAction
): ReducerState => {
  switch (action.type) {
    case BURGER_INGREDIENT_DETAILS_SET_DATA: {
      const { data } = action;

      return {
        ...state,
        data,
      };
    }

    default: {
      return state;
    }
  }
};
