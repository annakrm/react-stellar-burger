import { Action } from "redux";

import { BurgerIngredientDto } from "~/shared/api/dto";
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
  item: BurgerIngredientDto
) => {
  type: string;
  item: BurgerIngredientDto & { uniqueId: string };
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
