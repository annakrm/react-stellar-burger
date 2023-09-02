import { ACCESS_TOKEN_LS_KEY } from "../constants";

export const getAccessToken = (): string => {
  return localStorage.getItem(ACCESS_TOKEN_LS_KEY);
};
