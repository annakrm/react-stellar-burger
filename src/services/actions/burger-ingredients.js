import { BURGER_INGREDIENTS_SET_ACTIVE_TAB, BURGER_INGREDIENTS_SET_DATA } from '../constants';

export const setBurgerIngredientsData = (data) => ({
    type: BURGER_INGREDIENTS_SET_DATA,
    data
});

export const setBurgerIngredientsActiveTab = (activeTab) => ({
    type: BURGER_INGREDIENTS_SET_ACTIVE_TAB,
    activeTab
});