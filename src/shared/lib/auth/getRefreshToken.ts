import { REFRESH_TOKEN_LS_KEY } from "../constants";

export const getRefreshToken = (): string => {
  return localStorage.getItem(REFRESH_TOKEN_LS_KEY);
};
