import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import type { BurgerConstructorOrderDetailsDto } from "~/shared/api/dto";

import { RootState } from "./common";

export type OrderState = {
  details: BurgerConstructorOrderDetailsDto | null;
  orderDetailsModalOpened: boolean;
  error: string;
};

export type OrderAction = Action<string> & OrderState;

export type SetOrderDetailsModalOpenedAction = (
  orderDetailsModalOpened: boolean
) => {
  type: string;
  orderDetailsModalOpened: boolean;
};

export type MakeOrderThunkAction = (
  ingredientIds: string[]
) => ThunkAction<void, RootState, unknown, AnyAction>;
