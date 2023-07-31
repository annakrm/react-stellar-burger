import update from 'immutability-helper'

import { IngredientType } from '../../utils/constants';
import {
  REORDER_SELECTED_BURGER_INGREDIENTS,
  SELECTED_BURGER_INGREDIENTS_ADD_ITEM,
  SELECTED_BURGER_INGREDIENTS_DELETE_ITEM
} from '../constants';

const initialState = {
  data: [
    {
      "_id": "643d69a5c3f7b9001cfa093c",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
  },
  {
    "_id": "643d69a5c3f7b9001cfa093c",
    "name": "Краторная булка N-200i",
    "type": "bun",
    "proteins": 80,
    "fat": 24,
    "carbohydrates": 53,
    "calories": 420,
    "price": 1255,
    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v": 0
  }],
}

export const selectedBurgerIngredientsReducer = (state = initialState, action) => {
  switch(action.type) {
      case SELECTED_BURGER_INGREDIENTS_ADD_ITEM: {
          const { item } = action;
          const { data: currentData } = state;
          const updatedData = [...currentData];

          if (item.type === IngredientType.BUN) {
            updatedData[0] = item;
            updatedData[updatedData.length - 1] = item;
          } else {
            updatedData[updatedData.length] = updatedData[updatedData.length - 1];
            updatedData[updatedData.length - 2] = item;
          }

          return {
              ...state,
              data: updatedData,
          };
      }
      case SELECTED_BURGER_INGREDIENTS_DELETE_ITEM: {
        const { itemIndex } = action;
        const { data: currentData } = state;
        const updatedData = [...currentData];

        updatedData.splice(itemIndex + 1, 1);

        return {
            ...state,
            data: updatedData,
        };
      }
      case REORDER_SELECTED_BURGER_INGREDIENTS: {
        const { dragIndex, hoverIndex } = action;
        const { data: currentData } = state;

        const currentDataWithoutBuns = currentData.slice(1, currentData.length - 1);
        const reorderedData = update(currentDataWithoutBuns, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, currentDataWithoutBuns[dragIndex]],
            ],
          });

        const updatedData = [currentData[0], ...reorderedData, currentData[0]]

        console.log(currentDataWithoutBuns);
        // console.log(updatedData, dragIndex, hoverIndex);

        return {
            ...state,
            data: updatedData,
        };
      }
      default: {
          return state;
      }
  }
};