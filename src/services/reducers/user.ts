import {
  USER_SET_AUTH_CHECKED,
  USER_SET_USER_DATA,
  USER_RESET_DATA,
  USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
  USER_SET_LOGIN_SUCCESS,
} from "../constants";
import { UserAction, UserState } from "../types";

const initialState: UserState = {
  userData: null,
  authChecked: false,
  passwordResetRequestSuccessful: false,
  loginSuccessful: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case USER_SET_USER_DATA: {
      const { userData } = action;

      return { ...state, userData };
    }

    case USER_SET_AUTH_CHECKED: {
      const { authChecked } = action;

      return { ...state, authChecked };
    }

    case USER_RESET_DATA: {
      return initialState;
    }

    case USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS: {
      return {
        ...state,
        passwordResetRequestSuccessful: action.passwordResetRequestSuccessful,
      };
    }

    case USER_SET_LOGIN_SUCCESS: {
      return {
        ...state,
        loginSuccessful: action.loginSuccessful,
      };
    }

    default: {
      return state;
    }
  }
};
