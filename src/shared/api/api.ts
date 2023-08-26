import { checkResponse } from "../lib/checkResponse";

const apiConfig = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    authorization: "",
    "Content-Type": "application/json",
  },
};

const request = (endpoint, options) => {
  const { baseUrl, headers } = apiConfig;

  return fetch(`${baseUrl}/${endpoint}`, { headers, ...options }).then(
    checkResponse
  );
};

export const getBurgerIngredients = (): Promise<string> => {
  return request("ingredients", { method: "GET" });
};

export const makeOrder = (ingredientIds: string[]): Promise<string> => {
  return request("orders", {
    method: "POST",
    body: JSON.stringify({ ingredients: ingredientIds }),
  });
};

// TODO: refactor it
// fetch ('https://norma.nomoreparties.space/api/password-reset', {
//   method: 'POST',
//   body: JSON.stringify({
//     "email": ""
//   })
// });

// fetch ('https://norma.nomoreparties.space/api/password-reset/reset', {
//   method: 'POST',
//   body: JSON.stringify({
//     "password": "",
//     "token": ""
//   })
// });

// fetch ('https://norma.nomoreparties.space/api/auth/register', {
//   method: 'POST',
//   body: JSON.stringify({
//     "email": "test-data@yandex.ru",
//     "password": "password",
//     "name": "Username"
//   })
// });

// fetch ('https://norma.nomoreparties.space/api/auth/register', {
//   method: 'POST',
//   body: JSON.stringify({
//     "email": "",
//     "password": "",
//     "name": ""
//   })
// });

// fetch ('https://norma.nomoreparties.space/api/auth/logout', {
//   method: 'POST',
//   body: JSON.stringify({
//     "token": "значение refreshToken"
//   })
// });

// fetch ('https://norma.nomoreparties.space/api/auth/user', {
//   method: 'PATCH',
// });

export const apiInstance = {
  burgerIngredients: {
    getBurgerIngredients,
  },
  burgerConstructor: {
    makeOrder,
  },
};
