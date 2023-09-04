import {
  getAccessToken,
  getRefreshToken,
  updateLocalStorageTokens,
} from "../lib/auth";
import { JWT_EXPIRED } from "../lib/constants";

import type {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  InitPasswordResetRequest,
  InitPasswordResetResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  RefreshTokenResponse,
  GetUserResponse,
  UpdateUserResponse,
  UpdateUserRequest,
} from "./dto";
import { request } from "./lib";
import type { RequestOptions } from "./lib";

const refreshToken = (): Promise<RefreshTokenResponse> => {
  return request<RefreshTokenResponse>("auth/token", {
    method: "POST",
    body: JSON.stringify({
      token: getRefreshToken(),
    }),
  });
};

const requestWithRefresh = async <T>(
  endpoint: string,
  options: RequestOptions
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

const logout = (): Promise<LogoutResponse> => {
  return requestWithRefresh<LogoutResponse>("auth/logout", {
    method: "POST",
    body: JSON.stringify({ token: getRefreshToken() }),
  });
};

const initPasswordReset = ({
  email,
}: InitPasswordResetRequest): Promise<InitPasswordResetResponse> => {
  return request<InitPasswordResetResponse>("password-reset", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
};

const resetPassword = ({
  password,
  token,
}: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  return request<ResetPasswordResponse>("password-reset/reset", {
    method: "POST",
    body: JSON.stringify({ password, token }),
  });
};

const getUser = (): Promise<GetUserResponse> => {
  return requestWithRefresh<GetUserResponse>("auth/user", {
    method: "GET",
    headers: {
      authorization: getAccessToken(),
    },
  });
};

const updateUser = ({
  name,
  email,
  password,
}: UpdateUserRequest): Promise<UpdateUserResponse> => {
  return requestWithRefresh<UpdateUserResponse>("auth/user", {
    method: "PATCH",
    headers: {
      authorization: getAccessToken(),
    },
    body: JSON.stringify({ name, email, password }),
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
