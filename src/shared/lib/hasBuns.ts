import { BurgerIngredient, BurgerIngredientType } from "./types";

export const hasBuns = (burgerIngresients: BurgerIngredient[]): boolean =>
  burgerIngresients.findIndex(
    ({ type }) => type === BurgerIngredientType.BUN
  ) !== -1;
