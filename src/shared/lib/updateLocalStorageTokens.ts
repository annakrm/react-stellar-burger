import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from "./constants";

export const updateLocalStorageTokens = (
  accessToken: string,
  refreshToken: string
): void => {
  localStorage.setItem(ACCESS_TOKEN_LS_KEY, accessToken);
  localStorage.setItem(REFRESH_TOKEN_LS_KEY, refreshToken);
};
