import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { burgerIngredientDetailsReducer } from './burger-ingredient-details';
import { selectedBurgerIngredientsReducer } from './selected-burger-ingredients';
import { orderDetailsReducer } from './order-details';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerIngredientDetails: burgerIngredientDetailsReducer,
  selectedBurgerIngredients: selectedBurgerIngredientsReducer,
  orderDetails: orderDetailsReducer,
});