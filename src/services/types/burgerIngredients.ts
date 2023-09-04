import { Action } from "redux";

import type { BurgerIngredientDto } from "~/shared/api/dto";
import { BurgerIngredientTab } from "~/shared/lib/types";

export type BurgerIngredientsState = {
  data: BurgerIngredientDto[];
  activeTab: BurgerIngredientTab;
  error: string;
};

export type BurgerIngredientsAction = Action<string> & BurgerIngredientsState;
