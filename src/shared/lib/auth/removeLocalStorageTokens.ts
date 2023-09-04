import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from "../constants";

export const removeLocalStorageTokens = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_LS_KEY);
  localStorage.removeItem(REFRESH_TOKEN_LS_KEY);
};
