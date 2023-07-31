import { BURGER_INGREDIENT_DETAILS_SET_DATA } from '../constants';

export const setBurgerIngredientDetails = (data) => ({
    type: BURGER_INGREDIENT_DETAILS_SET_DATA,
    data
});