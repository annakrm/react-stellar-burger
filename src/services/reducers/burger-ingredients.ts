// reducer.js
import { Action } from "redux";

import { BurgerIngredient, BurgerIngredientTab } from "../../shared/lib/types";
import {
  BURGER_INGREDIENTS_GET_DATA_FAILED,
  BURGER_INGREDIENTS_GET_DATA_SUCCESS,
  BURGER_INGREDIENTS_SET_ACTIVE_TAB,
} from "../constants";

type ReducerState = {
  data: BurgerIngredient[];
  activeTab: BurgerIngredientTab;
  error: string;
};

type ReducerAction = Action<string> & ReducerState;

const initialState: ReducerState = {
  data: [],
  activeTab: BurgerIngredientTab.BUNS,
  error: "",
};

export const burgerIngredientsReducer = (
  state = initialState,
  action: ReducerAction
): ReducerState => {
  switch (action.type) {
    case BURGER_INGREDIENTS_GET_DATA_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        data,
      };
    }

    case BURGER_INGREDIENTS_GET_DATA_FAILED: {
      const { error } = action;

      console.error(`Ошибка при получении списка ингредиентов: ${error}`);

      return state;
    }

    case BURGER_INGREDIENTS_SET_ACTIVE_TAB: {
      const { activeTab } = action;

      return {
        ...state,
        activeTab,
      };
    }

    default: {
      return state;
    }
  }
};
