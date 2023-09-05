import {
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
} from "../constants";
import { OrderAction, OrderState } from "../types";

const initialState: OrderState = {
  details: null,
  orderDetailsModalOpened: false,
  error: "",
};

export const orderReducer = (
  state = initialState,
  action: OrderAction
): OrderState => {
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
      const { orderDetailsModalOpened } = action;

      return {
        ...state,
        orderDetailsModalOpened,
      };
    }

    default: {
      return state;
    }
  }
};
