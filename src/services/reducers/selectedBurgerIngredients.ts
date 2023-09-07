import {
  SELECTED_BURGER_INGREDIENTS_RESET_DATA,
  SELECTED_BURGER_INGREDIENTS_UPDATE_DATA,
} from "../constants";
import {
  SelectedBurgerIngredientsAction,
  SelectedBurgerIngredientsState,
} from "../types";

export const initialState: SelectedBurgerIngredientsState = {
  data: [],
};

export const selectedBurgerIngredientsReducer = (
  state = initialState,
  action: SelectedBurgerIngredientsAction
): SelectedBurgerIngredientsState => {
  switch (action.type) {
    case SELECTED_BURGER_INGREDIENTS_RESET_DATA: {
      return initialState;
    }

    case SELECTED_BURGER_INGREDIENTS_UPDATE_DATA: {
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
