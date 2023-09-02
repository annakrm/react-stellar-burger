import { BurgerIngredientDto } from "~/shared/api/dto";

export type AddedBurgerIngredient = {
  uniqueId: string;
} & BurgerIngredientDto;
