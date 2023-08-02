// reducer.js
import {
  ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAILED,
} from '../constants';

const initialState = {
  details: null,
  orderDetailesModalOpened: false,
}

export const orderReducer = (state = initialState, action) => {
  switch(action.type) {
      case MAKE_ORDER_SUCCESS: {
        const { details } = action;

          return {
              ...state,
              details,
          };
      }
      case MAKE_ORDER_FAILED: {
        const { error } = action;

        console.error(`Ошибка при оформлении заказа: ${error}`);

          return state;
      }
      case ORDER_DETAILS_MODAL_OPENED_SET_VALUE: {
        const { value } = action;

          return {
            ...state,
            orderDetailesModalOpened: value
          };
      }
      default: {
          return state;
      }
  }
};