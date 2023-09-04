import type { BurgerIngredientDto } from "../api/dto";
import { BurgerIngredientType } from "../api/dto";

export const hasBuns = (burgerIngresients: BurgerIngredientDto[]): boolean =>
  burgerIngresients.findIndex(
    ({ type }) => type === BurgerIngredientType.BUN
  ) !== -1;
