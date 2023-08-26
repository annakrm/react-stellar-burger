export enum BurgerIngredientType {
  BUN = "bun",
  SAUCE = "sauce",
  MAIN = "main",
}

export type BurgerIngredient = {
  _id: number;
  name: string;
  type: BurgerIngredientType;
  price: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  image: string;
  image_mobile: string;
  image_large: string;
};
