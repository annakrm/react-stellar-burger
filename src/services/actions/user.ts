import { redirect } from "react-router";

import { apiInstance } from "../../shared/api";
import {
  getAccessToken,
  updateLocalStorageTokens,
} from "../../shared/lib/auth";
import { removeLocalStorageTokens } from "../../shared/lib/auth/removeLocalStorageTokens";
import { SERVER_ERROR_MESSAGE } from "../../shared/lib/constants";
import {
  USER_SET_AUTH_CHECKED,
  USER_SET_USER_DATA,
  USER_RESET_DATA,
  USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
  USER_SET_LOGIN_SUCCESS,
} from "../constants";
import {
  AppDispatch,
  ResetUserDataAction,
  SetUserDataAction,
  SetAuthCheckedAction,
  SetInitPasswordResetRequestSuccessAction,
  SetLoginSuccessAction,
  RegisterThunkAction,
  LoginThunkAction,
  LogoutThunkAction,
  InitPasswordResetThunkAction,
  ResetPasswordThunkAction,
  GetUserThunkAction,
  UpdateUserThunkAction,
  CheckUserAuthAction,
} from "../types";

export const resetUserData: ResetUserDataAction = () => ({
  type: USER_RESET_DATA,
});

export const setUserData: SetUserDataAction = (userData) => ({
  type: USER_SET_USER_DATA,
  userData,
});

export const setAuthChecked: SetAuthCheckedAction = (authChecked) => ({
  type: USER_SET_AUTH_CHECKED,
  authChecked,
});

export const setInitPasswordResetRequestSuccess: SetInitPasswordResetRequestSuccessAction = (
  value
) => ({
  type: USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
  passwordResetRequestSuccessful: value,
});

export const setLoginSuccess: SetLoginSuccessAction = (value) => ({
  type: USER_SET_LOGIN_SUCCESS,
  loginSuccessful: value,
});

export const register: RegisterThunkAction = (requestData) => {
  return (dispatch: AppDispatch) => {
    return apiInstance.userApi
      .register(requestData)
      .then((response) => {
        if (response.success) {
          const { accessToken, refreshToken, user } = response;

          updateLocalStorageTokens(accessToken, refreshToken);
          dispatch(setUserData(user));
        } else {
          return Promise.reject(SERVER_ERROR_MESSAGE);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const login: LoginThunkAction = (requestData) => {
  return (dispatch: AppDispatch) => {
    return apiInstance.userApi
      .login(requestData)
      .then((response) => {
        if (response.success) {
          const { accessToken, refreshToken, user } = response;

          updateLocalStorageTokens(accessToken, refreshToken);
          dispatch(setUserData(user));
          dispatch(setLoginSuccess(true));
        } else {
          return Promise.reject(SERVER_ERROR_MESSAGE);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const logout: LogoutThunkAction = () => {
  return (dispatch: AppDispatch) => {
    return apiInstance.userApi
      .logout()
      .then((response) => {
        if (response.success) {
          window.location.href = "/login";

          dispatch(resetUserData());
          removeLocalStorageTokens();
        } else {
          return Promise.reject(SERVER_ERROR_MESSAGE);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const initPasswordReset: InitPasswordResetThunkAction = (
  requestData
) => {
  return (dispatch: AppDispatch) => {
    return apiInstance.userApi
      .initPasswordReset(requestData)
      .then((response) => {
        if (response.success) {
          dispatch(setInitPasswordResetRequestSuccess(true));
        } else {
          return Promise.reject(SERVER_ERROR_MESSAGE);
        }
      });
  };
};

export const resetPassword: ResetPasswordThunkAction = (requestData) => {
  return () => {
    return apiInstance.userApi.resetPassword(requestData).then((response) => {
      if (response.success) {
        redirect("/login");
      } else {
        return Promise.reject(SERVER_ERROR_MESSAGE);
      }
    });
  };
};

export const getUser: GetUserThunkAction = () => {
  return (dispatch: AppDispatch) => {
    return apiInstance.userApi.getUser().then((response) => {
      if (response.success) {
        dispatch(setUserData(response.user));
      } else {
        return Promise.reject(SERVER_ERROR_MESSAGE);
      }
    });
  };
};

export const updateUser: UpdateUserThunkAction = (requestData) => {
  return (dispatch: AppDispatch) => {
    return apiInstance.userApi.updateUser(requestData).then((response) => {
      if (response.success) {
        dispatch(setUserData(response.user));
      } else {
        return Promise.reject(SERVER_ERROR_MESSAGE);
      }
    });
  };
};

export const checkUserAuth: CheckUserAuthAction = () => {
  return (dispatch: AppDispatch): void => {
    const accessToken = getAccessToken();

    if (accessToken) {
      dispatch(getUser() as any)
        .catch((error) => {
          console.error(error);

          removeLocalStorageTokens();

          dispatch(setUserData(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
      dispatch(setUserData(null));
    }
  };
};
