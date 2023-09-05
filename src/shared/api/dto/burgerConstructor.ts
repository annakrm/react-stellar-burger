import { ResponseSuccess } from "./common";

export type MakeOrderRequest = {
  ingredientIds: string[];
};

export type MakeOrderResponse = ResponseSuccess & OrderDetailsDto;

export type OrderDetailsDto = {
  name: string;
  order: OrderDto;
};

export type OrderDto = {
  number: number;
};
