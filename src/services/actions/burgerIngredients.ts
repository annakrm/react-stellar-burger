import type { BurgerIngredientDto } from "~/shared/api/dto";
import { apiInstance } from "~shared/api";

import {
  BURGER_INGREDIENTS_GET_DATA_FAILED,
  BURGER_INGREDIENTS_GET_DATA_SUCCESS,
  BURGER_INGREDIENTS_SET_ACTIVE_TAB,
} from "../constants";
import {
  AppDispatch,
  GetBurgerIngredientsThunkAction,
  SetBurgerIngredientsActiveTabAction,
} from "../types";

export const setBurgerIngredientsActiveTab: SetBurgerIngredientsActiveTabAction = (
  activeTab
) => ({
  type: BURGER_INGREDIENTS_SET_ACTIVE_TAB,
  activeTab,
});

export const getBurgerIngredients: GetBurgerIngredientsThunkAction = () => {
  return (dispatch: AppDispatch): Promise<void> => {
    return apiInstance.burgerIngredientsApi
      .getBurgerIngredients()
      .then(({ data }: { data: BurgerIngredientDto[] }) => {
        dispatch({
          type: BURGER_INGREDIENTS_GET_DATA_SUCCESS,
          data,
        });
      })
      .catch((err) => {
        dispatch({
          type: BURGER_INGREDIENTS_GET_DATA_FAILED,
          error: err,
        });
      });
  };
};
