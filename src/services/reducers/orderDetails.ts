import { ORDER_DETAILS_SET_DATA } from "../constants";
import { OrderDetailsState, OrderDetailsAction } from "../types";

export const initialState: OrderDetailsState = {
  data: null,
};

export const orderDetailsReducer = (
  state = initialState,
  action: OrderDetailsAction
): OrderDetailsState => {
  switch (action.type) {
    case ORDER_DETAILS_SET_DATA: {
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
