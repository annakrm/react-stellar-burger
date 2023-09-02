import type { BurgerIngredientDto } from "~/shared/api/dto";

import { BURGER_INGREDIENT_DETAILS_SET_DATA } from "../constants";

export const setBurgerIngredientDetails = (
  data: BurgerIngredientDto
): {
  type: string;
  data: BurgerIngredientDto;
} => ({
  type: BURGER_INGREDIENT_DETAILS_SET_DATA,
  data,
});
