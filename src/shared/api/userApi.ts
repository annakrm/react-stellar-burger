import { ACCESS_TOKEN_LS_KEY, JWT_EXPIRED } from "../lib/constants";
import { updateLocalStorageTokens } from "../lib/updateLocalStorageTokens";

import type {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  InitPasswordResetRequest,
  InitPasswordResetResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  RefreshTokenResponse,
  GetUserResponse,
  UpdateUserResponse,
} from "./dto";
import { request } from "./lib";

const refreshToken = (): Promise<RefreshTokenResponse> => {
  return request<RefreshTokenResponse>("auth/token", {
    method: "POST",
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

const requestWithRefresh = async <T>(
  endpoint: string,
  options: Record<string, string>
): Promise<T> => {
  try {
    const response = await request<T>(endpoint, options);

    return response;
  } catch (err) {
    if (err.message === JWT_EXPIRED) {
      const refreshData = await refreshToken();

      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }

      const { accessToken, refreshToken: refreshTokenValue } = refreshData;

      updateLocalStorageTokens(accessToken, refreshTokenValue);

      ((options.headers as unknown) as {
        authorization: string;
      }).authorization = refreshData.accessToken;

      const response = await request<T>(endpoint, options);

      return response;
    }

    return Promise.reject(err);
  }
};

const register = ({
  name,
  email,
  password,
}: RegisterRequest): Promise<RegisterResponse> => {
  return request<RegisterResponse>("auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
};

const login = ({ email, password }: LoginRequest): Promise<LoginResponse> => {
  return request<LoginResponse>("auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

const logout = ({ token }: LogoutRequest): Promise<LogoutResponse> => {
  return requestWithRefresh<LogoutResponse>("auth/logout", {
    method: "POST",
    body: JSON.stringify({ token }),
  });
};

const initPasswordReset = ({
  email,
}: InitPasswordResetRequest): Promise<InitPasswordResetResponse> => {
  return request<InitPasswordResetResponse>("auth/password-reset", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
};

const resetPassword = ({
  password,
  token,
}: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  return request<ResetPasswordResponse>("auth/password-reset/reset", {
    method: "POST",
    body: JSON.stringify({ password, token }),
  });
};

const getUser = (): Promise<GetUserResponse> => {
  return requestWithRefresh<GetUserResponse>("auth/user", {
    method: "GET",
    headers: localStorage.getItem(ACCESS_TOKEN_LS_KEY),
  });
};

const updateUser = (): Promise<UpdateUserResponse> => {
  return requestWithRefresh<UpdateUserResponse>("auth/user", {
    method: "PATCH",
    headers: localStorage.getItem(ACCESS_TOKEN_LS_KEY),
  });
};

export const userApi = {
  login,
  logout,
  register,
  getUser,
  updateUser,
  initPasswordReset,
  resetPassword,
};
