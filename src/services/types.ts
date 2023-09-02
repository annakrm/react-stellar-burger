import { Action } from "redux";

import type {
  OrderDetailsDto,
  BurgerIngredientDto,
  UserDto,
} from "~/shared/api/dto";
import { AddedBurgerIngredient, BurgerIngredientTab } from "~/shared/lib/types";

import type { rootReducer } from "./reducers";

export type BurgerIngredientDetailsState = {
  data: BurgerIngredientDto | null;
};

export type BurgerIngredientDetailsAction = Action<string> &
  BurgerIngredientDetailsState;

export type BurgerIngredientsState = {
  data: BurgerIngredientDto[];
  activeTab: BurgerIngredientTab;
  error: string;
};

export type BurgerIngredientsAction = Action<string> & BurgerIngredientsState;

export type OrderState = {
  details: OrderDetailsDto | null;
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
  userData: UserDto | null;
  authChecked: boolean;
};

export type UserAction = Action<string> & UserState;

export type RootState = ReturnType<typeof rootReducer>;
