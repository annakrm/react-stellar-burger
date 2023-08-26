import { Action } from "redux";

import { USER_SET_AUTH_CHECKED, USER_SET_USER_DATA } from "../constants";

type ReducerState = {
  userData: null;
  authChecked: boolean;
};

type ReducerAction = Action<string> & Partial<ReducerState>;

const initialState: ReducerState = {
  userData: null,
  authChecked: false,
};

export const userReducer = (
  state = initialState,
  action: ReducerAction
): ReducerState => {
  switch (action.type) {
    case USER_SET_USER_DATA: {
      const { userData } = action;

      return { ...state, userData };
    }

    case USER_SET_AUTH_CHECKED: {
      const { authChecked } = action;

      return { ...state, authChecked };
    }

    default: {
      return state;
    }
  }
};
