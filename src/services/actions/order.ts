import { Dispatch } from "redux";

import type { BurgerConstructorOrderDetailsDto } from "~/shared/api/dto";

import { apiInstance } from "../../shared/api";
import {
  BURGER_CONSTRUCTOR_RESET_DATA,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
} from "../constants";

export const setOrderDetailsModalOpened = (
  orderDetailsModalOpened: boolean
): {
  type: string;
  orderDetailsModalOpened: boolean;
} => ({
  type: ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
  orderDetailsModalOpened,
});

export const makeOrder = (ingredientIds: string[]) => {
  return (dispatch: Dispatch): void => {
    apiInstance.burgerConstructorApi
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
