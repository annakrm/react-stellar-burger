import { Dispatch } from "redux";

import { BurgerIngredient, BurgerIngredientTab } from "~/shared/lib/types";
import { apiInstance } from "~shared/api";

import {
  BURGER_INGREDIENTS_GET_DATA_FAILED,
  BURGER_INGREDIENTS_GET_DATA_SUCCESS,
  BURGER_INGREDIENTS_SET_ACTIVE_TAB,
} from "../constants";

export const getBurgerIngredients = () => {
  return (dispatch: Dispatch<any>) => {
    apiInstance.burgerIngredients
      .getBurgerIngredients()
      .then(({ data }: { data: BurgerIngredient[] }) => {
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

export const setBurgerIngredientsActiveTab = (
  activeTab: BurgerIngredientTab
): { type: string; activeTab: BurgerIngredientTab } => ({
  type: BURGER_INGREDIENTS_SET_ACTIVE_TAB,
  activeTab,
});
