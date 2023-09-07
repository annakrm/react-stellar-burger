import update from "immutability-helper";

import { AddedBurgerIngredient } from "../types";

export const reorderItemInIngredientsArray = (
  dragIndex: number,
  hoverIndex: number,
  currentData: AddedBurgerIngredient[]
): AddedBurgerIngredient[] => {
  const currentDataWithoutBuns = currentData.slice(1, currentData.length - 1);

  const reorderedData = update(currentDataWithoutBuns, {
    $splice: [
      [dragIndex, 1],
      [hoverIndex, 0, currentDataWithoutBuns[dragIndex]],
    ],
  });

  const updatedData = [currentData[0], ...reorderedData, currentData[0]];

  return updatedData;
};
