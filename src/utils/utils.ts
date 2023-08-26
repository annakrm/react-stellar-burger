import { IngredientType } from "./constants";

export const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }

  return Promise.reject(`Ошибка: ${response.status}`);
};

export const hasBuns = (burgerIngresients) =>
  burgerIngresients.findIndex(({ type }) => type === IngredientType.BUN) !== -1;
