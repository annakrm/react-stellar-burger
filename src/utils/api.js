import { checkResponse } from "./utils";

const apiConfig = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    authorization: '',
    'Content-Type': 'application/json'
  }
}

const request = (endpoint, options) => {
	const { baseUrl, headers } = apiConfig;

	return fetch(`${baseUrl}/${endpoint}`, { headers, ...options }).then(checkResponse);
}

export const getBurgerIngredients = () => {
  return request('ingredients', { method: 'GET' });
}

export const makeOrder = (ingredientIds) => {
	return request('orders', {
		method: 'POST',
		body: JSON.stringify({ ingredients: ingredientIds }),
	});
}

export const stellarBurgerApi = {
  burgerIngredients: {
    getBurgerIngredients,
  },
  burgerConstructor: {
    makeOrder,
  },
};