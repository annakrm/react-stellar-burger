import { BurgerIngredient } from "~/shared/lib/types";

import { BURGER_INGREDIENT_DETAILS_SET_DATA } from "../constants";

export const setBurgerIngredientDetails = (
  data: BurgerIngredient
): {
  type: string;
  data: BurgerIngredient;
} => ({
  type: BURGER_INGREDIENT_DETAILS_SET_DATA,
  data,
});
