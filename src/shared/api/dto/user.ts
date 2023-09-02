import { DefaultResponse, ResponseSuccess } from "./common";

type ResponseTokens = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterRequest = UserData;

export type RegisterResponse = ResponseSuccess &
  ResponseTokens & {
    user: UserDto;
  };

export type LoginRequest = Omit<UserData, "name">;

export type LoginResponse = ResponseSuccess &
  ResponseTokens & {
    user: UserDto;
  };

export type LogoutRequest = {
  token: string;
};

export type LogoutResponse = DefaultResponse;

export type InitPasswordResetRequest = Pick<UserData, "email">;

export type InitPasswordResetResponse = DefaultResponse;

export type ResetPasswordRequest = Pick<UserData, "password"> & {
  token: string;
};
export type ResetPasswordResponse = DefaultResponse;

export type RefreshTokenRequest = {
  token: string;
};

export type RefreshTokenResponse = ResponseSuccess & ResponseTokens;

export type GetUserResponse = ResponseSuccess & {
  user: UserDto;
};

export type UpdateUserRequest = UserData;

export type UpdateUserResponse = ResponseSuccess & {
  user: UserDto;
};

export type UserDto = Omit<UserData, "password">;

type UserData = {
  name: string;
  email: string;
  password: string;
};
