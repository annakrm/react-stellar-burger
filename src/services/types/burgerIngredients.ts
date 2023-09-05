import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import type { BurgerIngredientDto } from "~/shared/api/dto";
import { BurgerIngredientTab } from "~/shared/lib/types";

import { RootState } from "./common";

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

export type GetBurgerIngredientsThunkAction = () => ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
>;
