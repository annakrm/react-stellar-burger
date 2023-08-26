// reducer.js
import {
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
} from "../constants";

type OrderDetails = {
  order: {
    number: number;
  };
};

type InitialState = {
  details: OrderDetails | null;
  orderDetailesModalOpened: boolean;
};

const initialState: InitialState = {
  details: null,
  orderDetailesModalOpened: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
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
        orderDetailesModalOpened: value,
      };
    }

    default: {
      return state;
    }
  }
};
