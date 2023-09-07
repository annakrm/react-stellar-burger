import type { BurgerConstructorOrderDetailsDto } from "~/shared/api/dto";

import { apiInstance } from "../../shared/api";
import {
  BURGER_CONSTRUCTOR_RESET_DATA,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
} from "../constants";
import {
  AppDispatch,
  MakeOrderThunkAction,
  SetOrderDetailsModalOpenedAction,
} from "../types";

export const setOrderDetailsModalOpened: SetOrderDetailsModalOpenedAction = (
  orderDetailsModalOpened: boolean
) => ({
  type: ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
  orderDetailsModalOpened,
});

export const makeOrder: MakeOrderThunkAction = (ingredientIds) => {
  return (dispatch: AppDispatch) => {
    return apiInstance.burgerConstructorApi
      .makeOrder({ ingredientIds })
      .then(({ name, order }: BurgerConstructorOrderDetailsDto) => {
        dispatch({
          type: MAKE_ORDER_SUCCESS,
          details: { name, order },
        });

        dispatch(setOrderDetailsModalOpened(true));

        dispatch({
          type: BURGER_CONSTRUCTOR_RESET_DATA,
        });
      })
      .catch((err) => {
        dispatch({
          type: MAKE_ORDER_FAILED,
          error: err,
        });
      });
  };
};
