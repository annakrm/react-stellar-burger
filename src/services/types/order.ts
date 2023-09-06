import { Action } from "redux";

import type { BurgerConstructorOrderDetailsDto } from "~/shared/api/dto";

import { AppThunk } from "./common";

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

export type MakeOrderThunkAction = (ingredientIds: string[]) => AppThunk;
