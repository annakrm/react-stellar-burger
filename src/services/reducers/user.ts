import { USER_SET_AUTH_CHECKED, USER_SET_USER_DATA } from "../constants";

const initialState = {
  userData: null,
  isAuthChecked: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_USER_DATA: {
      const { userData } = action;

      return { ...state, userData };
    }

    case USER_SET_AUTH_CHECKED: {
      const { isAuthChecked } = action;

      return { ...state, isAuthChecked };
    }

    default: {
      return state;
    }
  }
};
