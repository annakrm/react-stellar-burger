import { Action } from "redux";

import type { BurgerIngredientDto } from "~/shared/api/dto";

export type BurgerIngredientDetailsState = {
  data: BurgerIngredientDto | null;
};

export type BurgerIngredientDetailsAction = Action<string> &
  BurgerIngredientDetailsState;
