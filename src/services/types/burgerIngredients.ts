import { Action } from "redux";

import type { BurgerIngredientDto } from "~/shared/api/dto";
import { BurgerIngredientTab } from "~/shared/lib/types";

import { AppThunk } from "./common";

export type BurgerIngredientsState = {
  data: BurgerIngredientDto[];
  activeTab: BurgerIngredientTab;
  error: string;
};

export type BurgerIngredientsAction = Action<string> & BurgerIngredientsState;

export type SetBurgerIngredientsActiveTabAction = (
  activeTab: BurgerIngredientTab
) => {
  type: string;
  activeTab: BurgerIngredientTab;
};

export type GetBurgerIngredientsThunkAction = () => AppThunk;
