import { redirect } from "react-router";
import { Dispatch } from "redux";

import { apiInstance } from "~/shared/api";
import {
  InitPasswordResetRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdateUserRequest,
} from "~/shared/api/dto";
import { getAccessToken, updateLocalStorageTokens } from "~/shared/lib/auth";
import { removeLocalStorageTokens } from "~/shared/lib/auth/removeLocalStorageTokens";
import { SERVER_ERROR_MESSAGE } from "~/shared/lib/constants";

import {
  USER_SET_AUTH_CHECKED,
  USER_SET_USER_DATA,
  USER_RESET_DATA,
  USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
  USER_SET_LOGIN_SUCCESS,
} from "../constants";

export const resetUserData = (): {
  type: string;
} => ({
  type: USER_RESET_DATA,
});

export const setUserData = (
  userData: object
): {
  type: string;
  userData: object;
} => ({
  type: USER_SET_USER_DATA,
  userData,
});

export const setAuthChecked = (
  authChecked: boolean
): {
  type: string;
  authChecked: boolean;
} => ({
  type: USER_SET_AUTH_CHECKED,
  authChecked,
});

export const setInitPasswordResetRequestSuccess = (
  value: boolean
): {
  type: string;
  passwordResetRequestSuccessful: boolean;
} => ({
  type: USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
  passwordResetRequestSuccessful: value,
});

export const setLoginSuccess = (
  value: boolean
): {
  type: string;
  loginSuccessful: boolean;
} => ({
  type: USER_SET_LOGIN_SUCCESS,
  loginSuccessful: value,
});

export const register = (requestData: RegisterRequest) => {
  return (dispatch: Dispatch): Promise<void> => {
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

export const login = (requestData: LoginRequest) => {
  return (dispatch: Dispatch): Promise<void> => {
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

export const logout = () => {
  return (dispatch: Dispatch): Promise<void> => {
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

export const initPasswordReset = (requestData: InitPasswordResetRequest) => {
  return (dispatch: Dispatch): Promise<void> => {
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

export const resetPassword = (requestData: ResetPasswordRequest) => {
  return (): Promise<void> => {
    return apiInstance.userApi.resetPassword(requestData).then((response) => {
      if (response.success) {
        redirect("/login");
      } else {
        return Promise.reject(SERVER_ERROR_MESSAGE);
      }
    });
  };
};

export const getUser = () => {
  return (dispatch: Dispatch): Promise<void> => {
    return apiInstance.userApi.getUser().then((response) => {
      if (response.success) {
        dispatch(setUserData(response.user));
      } else {
        return Promise.reject(SERVER_ERROR_MESSAGE);
      }
    });
  };
};

export const updateUser = (requestData: UpdateUserRequest) => {
  return (dispatch: Dispatch): Promise<void> => {
    return apiInstance.userApi.updateUser(requestData).then((response) => {
      if (response.success) {
        dispatch(setUserData(response.user));
      } else {
        return Promise.reject(SERVER_ERROR_MESSAGE);
      }
    });
  };
};

export const checkUserAuth = () => {
  return (dispatch: Dispatch): void => {
    const accessToken = getAccessToken();

    if (accessToken) {
      dispatch<any>(getUser()) // TODO: fix any
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
