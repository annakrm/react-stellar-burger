// reducer.js
import { BurgerIngredientTab } from '../../utils/constants';
import {
  BURGER_INGREDIENTS_SET_ACTIVE_TAB,
  BURGER_INGREDIENTS_SET_DATA,
} from '../constants';

const initialState = {
  data: [],
  activeTab: BurgerIngredientTab.BUNS,
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch(action.type) {
      case BURGER_INGREDIENTS_SET_DATA: {
        const { data } = action;

          return {
              ...state,
              data,
          };
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