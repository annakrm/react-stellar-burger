// reducer.js
import { Action } from "redux";

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

type ReducerState = {
  details: OrderDetails | null;
  orderDetailesModalOpened: boolean;
  error: string;
};

type ReducerAction = Action<string> & ReducerState;

const initialState: ReducerState = {
  details: null,
  orderDetailesModalOpened: false,
  error: "",
};

export const orderReducer = (
  state = initialState,
  action: ReducerAction
): ReducerState => {
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
      const { orderDetailesModalOpened } = action;

      return {
        ...state,
        orderDetailesModalOpened,
      };
    }

    default: {
      return state;
    }
  }
};
