import update from "immutability-helper";
import { Action } from "redux";
import { v4 as uuidv4 } from "uuid";

import { hasBuns } from "~shared/lib/hasBuns";

import {
  AddedBurgerIngredient,
  BurgerIngredientType,
} from "../../shared/lib/types";
import {
  BURGER_CONSTRUCTOR_RESET_DATA,
  REORDER_SELECTED_BURGER_INGREDIENTS,
  SELECTED_BURGER_INGREDIENTS_ADD_ITEM,
  SELECTED_BURGER_INGREDIENTS_DELETE_ITEM,
} from "../constants";

type ReducerState = {
  data: AddedBurgerIngredient[];
  item: AddedBurgerIngredient | null;
  itemIndex: number;
  dragIndex: number;
  hoverIndex: number;
};

type ReducerAction = Action<string> & Partial<ReducerState>;

const initialState: ReducerState = {
  data: [],
  item: null,
  itemIndex: -1,
  dragIndex: -1,
  hoverIndex: -1,
};

export const selectedBurgerIngredientsReducer = (
  state = initialState,
  action: ReducerAction
): ReducerState => {
  switch (action.type) {
    case SELECTED_BURGER_INGREDIENTS_ADD_ITEM: {
      const { item } = action;
      const { data: currentData } = state;
      let updatedData = [...currentData];

      const isBunItem = item.type === BurgerIngredientType.BUN;

      if (hasBuns(updatedData)) {
        if (isBunItem) {
          updatedData[0] = item;
          updatedData[updatedData.length - 1] = { ...item, uniqueId: uuidv4() };
        } else {
          updatedData[updatedData.length] = updatedData[updatedData.length - 1];
          updatedData[updatedData.length - 2] = item;
        }
      } else {
        if (isBunItem && updatedData.length === 0) {
          updatedData[0] = item;
          updatedData[1] = { ...item, uniqueId: uuidv4() };
        } else if (isBunItem && updatedData.length > 0) {
          updatedData = [item, ...updatedData, { ...item, uniqueId: uuidv4() }];
        } else {
          updatedData.push(item);
        }
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

      const currentDataWithoutBuns = currentData.slice(
        1,
        currentData.length - 1
      );

      const reorderedData = update(currentDataWithoutBuns, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, currentDataWithoutBuns[dragIndex]],
        ],
      });

      const updatedData = [currentData[0], ...reorderedData, currentData[0]];

      return {
        ...state,
        data: updatedData,
      };
    }

    case BURGER_CONSTRUCTOR_RESET_DATA: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
