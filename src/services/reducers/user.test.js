import * as types from "../constants";

import { userReducer, initialState } from "./user";

describe("userReducer reducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle USER_SET_USER_DATA", () => {
    const mockedUser = {
      name: "Ivanov Ivan Ivanovich",
      email: "ivanov@yandex.ru",
    };

    expect(
      userReducer(initialState, {
        type: types.USER_SET_USER_DATA,
        userData: mockedUser,
      })
    ).toEqual({
      ...initialState,
      userData: mockedUser,
    });
  });

  it("should handle USER_SET_AUTH_CHECKED", () => {
    expect(
      userReducer(initialState, {
        type: types.USER_SET_AUTH_CHECKED,
        authChecked: true,
      })
    ).toEqual({
      ...initialState,
      authChecked: true,
    });
  });

  it("should handle USER_RESET_DATA", () => {
    expect(
      userReducer(undefined, {
        type: types.USER_RESET_DATA,
      })
    ).toEqual(initialState);
  });

  it("should handle USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: types.USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
        passwordResetRequestSuccessful: true,
      })
    ).toEqual({
      ...initialState,
      passwordResetRequestSuccessful: true,
    });
  });

  it("should handle USER_SET_LOGIN_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: types.USER_SET_LOGIN_SUCCESS,
        loginSuccessful: true,
      })
    ).toEqual({
      ...initialState,
      loginSuccessful: true,
    });
  });
});
