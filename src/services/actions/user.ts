import { Dispatch } from "redux";

import { apiInstance } from "~/shared/api";
import { LoginRequest, RegisterRequest } from "~/shared/api/dto";
import { SERVER_ERROR_MESSAGE } from "~/shared/lib/constants";
import { updateLocalStorageTokens } from "~/shared/lib/updateLocalStorageTokens";

import { USER_SET_AUTH_CHECKED, USER_SET_USER_DATA } from "../constants";

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

export const getUser = () => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): Promise<any> => {
    return apiInstance.userApi.getUser().then((res) => {
      if (res.success) {
        dispatch(setUserData(res));
      }

      return Promise.reject(SERVER_ERROR_MESSAGE);
    });
  };
};

export const login = (requestData: LoginRequest) => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): Promise<any> => {
    return apiInstance.userApi
      .login(requestData)
      .then((response) => {
        if (response.success) {
          const { accessToken, refreshToken, user } = response;

          updateLocalStorageTokens(accessToken, refreshToken);
          dispatch(setUserData(user));
        }

        return Promise.reject(SERVER_ERROR_MESSAGE);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const registration = (requestData: RegisterRequest) => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): Promise<any> => {
    return apiInstance.userApi
      .register(requestData)
      .then((response) => {
        if (response) {
          const { accessToken, refreshToken, user } = response;

          updateLocalStorageTokens(accessToken, refreshToken);
          dispatch(setUserData(user));
        }

        return Promise.reject(SERVER_ERROR_MESSAGE);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  };
};

export const checkUserAuth = () => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): void => {
    if (localStorage.getItem("accessToken")) {
      ((dispatch(getUser()) as unknown) as Promise<any>)
        .catch((error) => {
          console.error(error);

          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");

          dispatch(setUserData(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
      dispatch(setUserData(null));
    }
  };
};
