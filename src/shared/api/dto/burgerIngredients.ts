import { ResponseSuccess } from "./common";

export type GetBurgerIngredientsResponse = ResponseSuccess & {
  data: BurgerIngredientDto[];
};

export type BurgerIngredientDto = {
  _id: string;
  __v: number;
  name: string;
  type: BurgerIngredientType | string;
  price: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  image: string;
  image_mobile: string;
  image_large: string;
};

export enum BurgerIngredientType {
  BUN = "bun",
  SAUCE = "sauce",
  MAIN = "main",
}
