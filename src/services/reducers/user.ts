import { USER_SET_AUTH_CHECKED, USER_SET_USER_DATA } from "../constants";

type InitialState = {
  userData: null;
  authChecked: boolean;
};

const initialState: InitialState = {
  userData: null,
  authChecked: false,
};

export const userReducer = (state = initialState, action) => {
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
