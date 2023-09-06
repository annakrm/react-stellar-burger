import { ORDER_DETAILS_SET_DATA } from "../constants";
import { SetOrderDetailsAction } from "../types";

export const setOrderDetails: SetOrderDetailsAction = (data) => ({
  type: ORDER_DETAILS_SET_DATA,
  data,
});
