import { Action, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import type {
  InitPasswordResetRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdateUserRequest,
  UserDto,
} from "~/shared/api/dto";

import { RootState } from "./common";

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

export type RegisterThunkAction = (
  requestData: RegisterRequest
) => ThunkAction<void, RootState, unknown, AnyAction>;

export type LoginThunkAction = (
  requestData: LoginRequest
) => ThunkAction<void, RootState, unknown, AnyAction>;

export type LogoutThunkAction = () => ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
>;

export type InitPasswordResetThunkAction = (
  requestData: InitPasswordResetRequest
) => ThunkAction<void, RootState, unknown, AnyAction>;

export type ResetPasswordThunkAction = (
  requestData: ResetPasswordRequest
) => ThunkAction<void, RootState, unknown, AnyAction>;

export type GetUserThunkAction = () => ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
>;

export type UpdateUserThunkAction = (
  requestData: UpdateUserRequest
) => ThunkAction<void, RootState, unknown, AnyAction>;

export type CheckUserAuthAction = () => ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
>;
