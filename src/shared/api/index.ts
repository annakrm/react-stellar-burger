import { burgerConstructorApi } from "./burgerConstructorApi";
import { burgerIngredientsApi } from "./burgerIngredientsApi";
import { userApi } from "./userApi";

type ApiInstance = {
  burgerConstructorApi: typeof burgerConstructorApi;
  burgerIngredientsApi: typeof burgerIngredientsApi;
  userApi: typeof userApi;
};

export const apiInstance: ApiInstance = {
  burgerConstructorApi,
  burgerIngredientsApi,
  userApi,
};
