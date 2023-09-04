import { Dispatch } from "redux";

import type { BurgerConstructorOrderDetailsDto } from "~/shared/api/dto";

import { apiInstance } from "../../shared/api";
import {
  BURGER_CONSTRUCTOR_RESET_DATA,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
} from "../constants";

export const setOrderDetailesModalOpened = (
  orderDetailesModalOpened: boolean
): {
  type: string;
  orderDetailesModalOpened: boolean;
} => ({
  type: ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
  orderDetailesModalOpened,
});

export const makeOrder = (ingredientIds: string[]) => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): void => {
    apiInstance.burgerConstructorApi
      .makeOrder({ ingredientIds })
      .then(({ name, order }: BurgerConstructorOrderDetailsDto) => {
        dispatch({
          type: MAKE_ORDER_SUCCESS,
          details: { name, order },
        });

        dispatch({
          type: ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
          value: true,
        });

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
