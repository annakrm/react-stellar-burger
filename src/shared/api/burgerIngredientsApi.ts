import type { GetBurgerIngredientsResponse } from "./dto";
import { request } from "./lib";

const getBurgerIngredients = (): Promise<GetBurgerIngredientsResponse> => {
  return request<GetBurgerIngredientsResponse>("ingredients", {
    method: "GET",
  });
};

export const burgerIngredientsApi = {
  getBurgerIngredients,
};
