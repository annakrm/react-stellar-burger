import { ResponseSuccess } from "./common";

export type MakeOrderRequest = {
  ingredientIds: string[];
};

export type MakeOrderResponse = ResponseSuccess &
  BurgerConstructorOrderDetailsDto;

export type BurgerConstructorOrderDetailsDto = {
  name: string;
  order: BurgerConstructorOrderDto;
};

export type BurgerConstructorOrderDto = {
  number: number;
};
