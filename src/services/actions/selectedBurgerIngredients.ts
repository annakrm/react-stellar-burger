import {
  SELECTED_BURGER_INGREDIENTS_RESET_DATA,
  SELECTED_BURGER_INGREDIENTS_UPDATE_DATA,
} from "../constants";
import {
  ResetSelectedBurgerIngredientsDataAction,
  UpdateSelectedBurgerIngredientsDataAction,
} from "../types";

export const resetSelectedBurgerIngredientsData: ResetSelectedBurgerIngredientsDataAction = (
  item
) => ({
  type: SELECTED_BURGER_INGREDIENTS_RESET_DATA,
  item,
});

export const updateSelectedBurgerIngredientsData: UpdateSelectedBurgerIngredientsDataAction = (
  data
) => ({
  type: SELECTED_BURGER_INGREDIENTS_UPDATE_DATA,
  data,
});
