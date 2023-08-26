// reducer.js
import { BurgerIngredient, BurgerIngredientTab } from "../../shared/lib/types";
import {
  BURGER_INGREDIENTS_GET_DATA_FAILED,
  BURGER_INGREDIENTS_GET_DATA_SUCCESS,
  BURGER_INGREDIENTS_SET_ACTIVE_TAB,
} from "../constants";

type InitialState = {
  data: BurgerIngredient[];
  activeTab: BurgerIngredientTab;
};

const initialState: InitialState = {
  data: [],
  activeTab: BurgerIngredientTab.BUNS,
};

export const burgerIngredientsReducer = (state = initialState, action) => {
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
