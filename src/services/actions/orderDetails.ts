import type { OrderDto } from "~/shared/api/dto";

import { ORDER_DETAILS_SET_DATA } from "../constants";

export const setOrderDetails = (
  data: OrderDto
): {
  type: string;
  data: OrderDto;
} => ({
  type: ORDER_DETAILS_SET_DATA,
  data,
});
