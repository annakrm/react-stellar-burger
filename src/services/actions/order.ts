import { stellarBurgerApi } from "../../shared/lib/api";
import {
  BURGER_CONSTRUCTOR_RESET_DATA,
  MAKE_ORDER_FAILED,
  MAKE_ORDER_SUCCESS,
  ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
} from "../constants";

export const setOrderDetailesModalOpened = (value) => ({
  type: ORDER_DETAILS_MODAL_OPENED_SET_VALUE,
  value,
});

export const makeOrder = (ingredientIds) => {
  return (dispatch) => {
    stellarBurgerApi.burgerConstructor
      .makeOrder(ingredientIds)
      .then(({ name, order }) => {
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
