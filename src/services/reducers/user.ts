import {
  USER_SET_AUTH_CHECKED,
  USER_SET_USER_DATA,
  USER_RESET_DATA,
} from "../constants";
import { UserAction, UserState } from "../types";

const initialState: UserState = {
  userData: null,
  authChecked: false,
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

    default: {
      return state;
    }
  }
};
