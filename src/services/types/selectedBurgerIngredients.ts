import { Action } from "redux";

import { AddedBurgerIngredient } from "~/shared/lib/types";

export type SelectedBurgerIngredientsState = {
  data: AddedBurgerIngredient[];
};

export type SelectedBurgerIngredientsAction = Action<string> &
  SelectedBurgerIngredientsState;

export type ResetSelectedBurgerIngredientsDataAction = (
  item: AddedBurgerIngredient
) => {
  type: string;
};

export type UpdateSelectedBurgerIngredientsDataAction = (
  data: AddedBurgerIngredient[]
) => {
  type: string;
  data: AddedBurgerIngredient[];
};
