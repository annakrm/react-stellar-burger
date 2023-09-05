import { BURGER_INGREDIENT_DETAILS_SET_DATA } from "../constants";
import { SetBurgerIngredientDetailsAction } from "../types";

export const setBurgerIngredientDetails: SetBurgerIngredientDetailsAction = (
  data
) => ({
  type: BURGER_INGREDIENT_DETAILS_SET_DATA,
  data,
});
