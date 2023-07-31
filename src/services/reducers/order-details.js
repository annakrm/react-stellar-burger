// reducer.js
import {
  ORDER_DETAILS_SET_DATA,
} from '../constants';

const initialState = {
  data: null,
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
      case ORDER_DETAILS_SET_DATA: {
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