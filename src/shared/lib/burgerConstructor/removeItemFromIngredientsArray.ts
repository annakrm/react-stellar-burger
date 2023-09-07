import { AddedBurgerIngredient } from "../types";

export const removeItemFromIngredientsArray = (
  itemIndex: number,
  currentData: AddedBurgerIngredient[]
): AddedBurgerIngredient[] => {
  const updatedData = [...currentData];

  updatedData.splice(itemIndex + 1, 1);

  return updatedData;
};
