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

export type AddSelectedBurgerIngredientsItemAction = (
  item: AddedBurgerIngredient
) => {
  type: string;
  item: AddedBurgerIngredient;
};

export type DeleteSelectedBurgerIngredientsItemAction = (
  itemIndex: number
) => {
  type: string;
  itemIndex: number;
};

export type ReorderSelectedBurgerIngredientsAction = (options: {
  dragIndex: number;
  hoverIndex: number;
}) => {
  type: string;
  dragIndex: number;
  hoverIndex: number;
};
