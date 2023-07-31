// reducer.js
import {
  BURGER_INGREDIENT_DETAILS_SET_DATA,
} from '../constants';

const initialState = {
  data: null,
}

export const burgerIngredientDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
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