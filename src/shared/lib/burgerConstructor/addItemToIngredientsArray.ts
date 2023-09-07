import { v4 as uuidv4 } from "uuid";

import { BurgerIngredientDto, BurgerIngredientType } from "../../api/dto";
import { hasBuns } from "../hasBuns";
import { AddedBurgerIngredient } from "../types";

export const addItemToIngredientsArray = (
  item: BurgerIngredientDto,
  currentData: AddedBurgerIngredient[]
): AddedBurgerIngredient[] => {
  const itemWithUniqueId = {
    ...item,
    uniqueId: uuidv4(),
  };

  let updatedData = [...currentData];

  const isBunItem = itemWithUniqueId.type === BurgerIngredientType.BUN;

  if (hasBuns(updatedData)) {
    if (isBunItem) {
      updatedData[0] = itemWithUniqueId;
      updatedData[updatedData.length - 1] = {
        ...itemWithUniqueId,
        uniqueId: uuidv4(),
      };
    } else {
      updatedData[updatedData.length] = updatedData[updatedData.length - 1];
      updatedData[updatedData.length - 2] = itemWithUniqueId;
    }
  } else {
    if (isBunItem && updatedData.length === 0) {
      updatedData[0] = itemWithUniqueId;
      updatedData[1] = { ...itemWithUniqueId, uniqueId: uuidv4() };
    } else if (isBunItem && updatedData.length > 0) {
      updatedData = [
        itemWithUniqueId,
        ...updatedData,
        { ...itemWithUniqueId, uniqueId: uuidv4() },
      ];
    } else {
      updatedData.push(itemWithUniqueId);
    }
  }

  return updatedData;
};
