import { BURGER_INGREDIENT_DETAILS_SET_DATA } from "../constants";
import {
  BurgerIngredientDetailsState,
  BurgerIngredientDetailsAction,
} from "../types";

export const initialState: BurgerIngredientDetailsState = {
  data: null,
};

export const burgerIngredientDetailsReducer = (
  state = initialState,
  action: BurgerIngredientDetailsAction
): BurgerIngredientDetailsState => {
  switch (action.type) {
    case BURGER_INGREDIENT_DETAILS_SET_DATA: {
      const { data } = action;

      return {
        ...state,
        data,
      };
    }

    default:
      return state;
  }
};
