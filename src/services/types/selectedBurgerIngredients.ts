import { Action } from "redux";

import { AddedBurgerIngredient } from "~/shared/lib/types";

export type SelectedBurgerIngredientsState = {
  data: AddedBurgerIngredient[];
  item: AddedBurgerIngredient | null;
  itemIndex: number;
  dragIndex: number;
  hoverIndex: number;
};

export type SelectedBurgerIngredientsAction = Action<string> &
  SelectedBurgerIngredientsState;
