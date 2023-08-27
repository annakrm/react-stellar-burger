import { Dispatch } from "redux";

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

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => Promise.reject(err));
};

const refreshToken = () => {
  return fetch("https://norma.nomoreparties.space/api/auth/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);

    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();

      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }

      localStorage.setItem("accessToken", refreshData.accessToken);
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);

      return await checkResponse(res);
    }

    return Promise.reject(err);
  }
};

export const getUser = () => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): Promise<any> => {
    return fetchWithRefresh("https://norma.nomoreparties.space/api/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if (res.success) {
        dispatch(setUserData(res.user));
      } else {
        return Promise.reject("Ошибка данных c сервера");
      }
    });
  };
};

export const login = (email: string, password: string) => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): Promise<any> => {
    return fetch("https://norma.nomoreparties.space/api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch(setUserData(res.user));
        } else {
          return Promise.reject("Ошибка данных c сервера");
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

export const registration = (email: string, password: string, name: string) => {
  // TODO: fix any
  return (dispatch: Dispatch<any>): Promise<any> => {
    return fetch("https://norma.nomoreparties.space/api/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);

          dispatch(setUserData(res.user));
        } else {
          return Promise.reject("Ошибка данных c сервера");
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
