import { Action } from "redux";

import type { BurgerConstructorOrderDetailsDto } from "~/shared/api/dto";

export type OrderState = {
  details: BurgerConstructorOrderDetailsDto | null;
  orderDetailesModalOpened: boolean;
  error: string;
};

export type OrderAction = Action<string> & OrderState;
