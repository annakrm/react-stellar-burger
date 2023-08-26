// reducer.js
import { BurgerIngredient } from "../../shared/lib/types";
import { BURGER_INGREDIENT_DETAILS_SET_DATA } from "../constants";

type InitialState = {
  data: BurgerIngredient | null;
};

const initialState: InitialState = {
  data: null,
};

export const burgerIngredientDetailsReducer = (
  state = initialState,
  action
) => {
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
