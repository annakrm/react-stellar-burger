import { v4 as uuidv4 } from 'uuid';

import {
    SELECTED_BURGER_INGREDIENTS_ADD_ITEM,
    SELECTED_BURGER_INGREDIENTS_DELETE_ITEM,
    REORDER_SELECTED_BURGER_INGREDIENTS
} from '../constants';

export const addSelectedBurgerIngredientsItem = (item) => ({
    type: SELECTED_BURGER_INGREDIENTS_ADD_ITEM,
    item: {
        ...item,
        uniqueId: uuidv4(),
    }
});

export const deleteSelectedBurgerIngredientsItem = (itemIndex) => ({
    type: SELECTED_BURGER_INGREDIENTS_DELETE_ITEM,
    itemIndex
});

export const reorderSelectedBurgerIngredients = ({ dragIndex, hoverIndex }) => ({
    type: REORDER_SELECTED_BURGER_INGREDIENTS,
    dragIndex,
    hoverIndex
})
