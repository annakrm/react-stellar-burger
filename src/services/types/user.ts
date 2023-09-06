import { Action } from "redux";

import type {
  InitPasswordResetRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdateUserRequest,
  UserDto,
} from "~/shared/api/dto";

import { AppThunk } from "./common";

export type UserState = {
  userData: UserDto | null;
  authChecked: boolean;
  passwordResetRequestSuccessful: boolean;
  loginSuccessful: boolean;
};

export type UserAction = Action<string> & UserState;

export type ResetUserDataAction = () => { type: string };

export type SetUserDataAction = (
  userData: UserDto
) => {
  type: string;
  userData: UserDto;
};

export type SetAuthCheckedAction = (
  authChecked: boolean
) => {
  type: string;
  authChecked: boolean;
};

export type SetInitPasswordResetRequestSuccessAction = (
  value: boolean
) => {
  type: string;
  passwordResetRequestSuccessful: boolean;
};

export type SetLoginSuccessAction = (
  value: boolean
) => {
  type: string;
  loginSuccessful: boolean;
};

export type RegisterThunkAction = (requestData: RegisterRequest) => AppThunk;

export type LoginThunkAction = (requestData: LoginRequest) => AppThunk;

export type LogoutThunkAction = () => AppThunk;

export type InitPasswordResetThunkAction = (
  requestData: InitPasswordResetRequest
) => AppThunk;

export type ResetPasswordThunkAction = (
  requestData: ResetPasswordRequest
) => AppThunk;

export type GetUserThunkAction = () => AppThunk;

export type UpdateUserThunkAction = (
  requestData: UpdateUserRequest
) => AppThunk;

export type CheckUserAuthAction = () => AppThunk;
