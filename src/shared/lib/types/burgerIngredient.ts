export enum BurgerIngredientType {
  BUN = "bun",
  SAUCE = "sauce",
  MAIN = "main",
}

export type BurgerIngredient = {
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

export type AddedBurgerIngredient = {
  uniqueId: string;
} & BurgerIngredient;
