import {
  REORDER_SELECTED_BURGER_INGREDIENTS,
  SELECTED_BURGER_INGREDIENTS_ADD_ITEM,
  SELECTED_BURGER_INGREDIENTS_DELETE_ITEM,
} from "../constants";
import {
  AddSelectedBurgerIngredientsItemAction,
  DeleteSelectedBurgerIngredientsItemAction,
  ReorderSelectedBurgerIngredientsAction,
} from "../types";

export const addSelectedBurgerIngredientsItem: AddSelectedBurgerIngredientsItemAction = (
  item
) => ({
  type: SELECTED_BURGER_INGREDIENTS_ADD_ITEM,
  item,
});

export const deleteSelectedBurgerIngredientsItem: DeleteSelectedBurgerIngredientsItemAction = (
  itemIndex
) => ({
  type: SELECTED_BURGER_INGREDIENTS_DELETE_ITEM,
  itemIndex,
});

export const reorderSelectedBurgerIngredients: ReorderSelectedBurgerIngredientsAction = ({
  dragIndex,
  hoverIndex,
}) => ({
  type: REORDER_SELECTED_BURGER_INGREDIENTS,
  dragIndex,
  hoverIndex,
});
