import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as types from "../constants";

import * as actions from "./user";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockedUserData = {
  name: "Ivanov Ivan Ivanovich",
  email: "ivanov@yandex.ru",
};

describe("Test resetUserData action", () => {
  it("should create an action with correct data", () => {
    const expectedAction = {
      type: types.USER_RESET_DATA,
    };

    expect(actions.resetUserData()).toEqual(expectedAction);
  });
});

describe("Test setUserData action", () => {
  it("should create an action with correct data", () => {
    const expectedAction = {
      type: types.USER_SET_USER_DATA,
      userData: mockedUserData,
    };

    expect(actions.setUserData(mockedUserData)).toEqual(expectedAction);
  });
});

describe("Test setAuthChecked action", () => {
  it("should create an action with correct data", () => {
    const expectedAction = {
      type: types.USER_SET_AUTH_CHECKED,
      authChecked: true,
    };

    expect(actions.setAuthChecked(true)).toEqual(expectedAction);
  });
});

describe("Test setInitPasswordResetRequestSuccess action", () => {
  it("should create an action with correct data", () => {
    const expectedAction = {
      type: types.USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
      passwordResetRequestSuccessful: true,
    };

    expect(actions.setInitPasswordResetRequestSuccess(true)).toEqual(
      expectedAction
    );
  });
});

describe("Test setLoginSuccess action", () => {
  it("should create an action with correct data", () => {
    const expectedAction = {
      type: types.USER_SET_LOGIN_SUCCESS,
      loginSuccessful: true,
    };

    expect(actions.setLoginSuccess(true)).toEqual(expectedAction);
  });
});

describe("Test register action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should register an user", () => {
    fetchMock.postOnce("https://norma.nomoreparties.space/api/auth/register", {
      body: { success: true, user: mockedUserData },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedActions = [
      {
        type: types.USER_SET_USER_DATA,
        userData: mockedUserData,
      },
      {
        type: types.USER_SET_AUTH_CHECKED,
        authChecked: true,
      },
    ];

    const store = mockStore();

    const mockedRequestData = { ...mockedUserData, password: "123123123" };

    return store.dispatch(actions.register(mockedRequestData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Test login action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should login an user", () => {
    fetchMock.postOnce("https://norma.nomoreparties.space/api/auth/login", {
      body: { success: true, user: mockedUserData },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedActions = [
      {
        type: types.USER_SET_USER_DATA,
        userData: mockedUserData,
      },
      {
        type: types.USER_SET_LOGIN_SUCCESS,
        loginSuccessful: true,
      },
      {
        type: types.USER_SET_AUTH_CHECKED,
        authChecked: true,
      },
    ];

    const store = mockStore();

    const mockedRequestData = {
      email: mockedUserData.email,
      password: "123123123",
    };

    return store.dispatch(actions.login(mockedRequestData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Test logout action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should logout an user", () => {
    fetchMock.postOnce("https://norma.nomoreparties.space/api/auth/logout", {
      body: { success: true },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedActions = [
      {
        type: types.USER_RESET_DATA,
      },
      {
        type: types.USER_SET_AUTH_CHECKED,
        authChecked: true,
      },
    ];

    const store = mockStore();

    return store.dispatch(actions.logout()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Test initPasswordReset action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should trigger the password reset process", () => {
    fetchMock.postOnce("https://norma.nomoreparties.space/api/password-reset", {
      body: { success: true },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedActions = [
      {
        type: types.USER_SET_INIT_PASSWORD_RESET_REQUEST_SUCCESS,
        passwordResetRequestSuccessful: true,
      },
    ];

    const store = mockStore();

    const mockedRequestData = {
      email: mockedUserData.email,
    };

    return store
      .dispatch(actions.initPasswordReset(mockedRequestData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe("Test resetPassword action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should reset password", () => {
    fetchMock.postOnce(
      "https://norma.nomoreparties.space/api/password-reset/reset",
      {
        body: { success: true },
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const expectedActions = [];

    const store = mockStore();

    const mockedRequestData = {
      password: "123123123",
      token: "5326234sdf239h8rwdisffds323",
    };

    return store.dispatch(actions.resetPassword(mockedRequestData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Test getUser action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should fetch an user's data", () => {
    fetchMock.getOnce("https://norma.nomoreparties.space/api/auth/user", {
      body: { success: true, user: mockedUserData },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedActions = [
      {
        type: types.USER_SET_USER_DATA,
        userData: mockedUserData,
      },
    ];

    const store = mockStore();

    return store.dispatch(actions.getUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Test updateUser action", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should update an user's data", () => {
    fetchMock.patchOnce("https://norma.nomoreparties.space/api/auth/user", {
      body: { success: true, user: mockedUserData },
      headers: {
        "content-type": "application/json",
      },
    });

    const expectedActions = [
      {
        type: types.USER_SET_USER_DATA,
        userData: mockedUserData,
      },
    ];

    const store = mockStore();

    const mockedRequestData = {
      ...mockedUserData,
      password: "123123123",
    };

    return store.dispatch(actions.updateUser(mockedRequestData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Test checkUserAuth action", () => {
  it("should check user auth", () => {
    const expectedActions = [
      {
        type: types.USER_SET_AUTH_CHECKED,
        authChecked: true,
      },
      {
        type: types.USER_SET_USER_DATA,
        userData: null,
      },
    ];

    const store = mockStore();

    store.dispatch(actions.checkUserAuth());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
