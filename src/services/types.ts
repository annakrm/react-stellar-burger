import { Action } from "redux";

import {
  AddedBurgerIngredient,
  BurgerIngredient,
  BurgerIngredientTab,
  OrderDetails,
} from "~/shared/lib/types";

import type { rootReducer } from "./reducers";

export type BurgerIngredientDetailsState = {
  data: BurgerIngredient | null;
};

export type BurgerIngredientDetailsAction = Action<string> &
  BurgerIngredientDetailsState;

export type BurgerIngredientsState = {
  data: BurgerIngredient[];
  activeTab: BurgerIngredientTab;
  error: string;
};

export type BurgerIngredientsAction = Action<string> & BurgerIngredientsState;

export type OrderState = {
  details: OrderDetails | null;
  orderDetailesModalOpened: boolean;
  error: string;
};

export type OrderAction = Action<string> & OrderState;

export type SelectedBurgerIngredientsState = {
  data: AddedBurgerIngredient[];
  item: AddedBurgerIngredient | null;
  itemIndex: number;
  dragIndex: number;
  hoverIndex: number;
};

export type SelectedBurgerIngredientsAction = Action<string> &
  SelectedBurgerIngredientsState;

export type UserState = {
  userData: null;
  authChecked: boolean;
};

export type UserAction = Action<string> & UserState;

export type RootState = ReturnType<typeof rootReducer>;
