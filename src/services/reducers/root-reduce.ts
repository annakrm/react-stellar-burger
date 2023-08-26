import { combineReducers } from "redux";

import { burgerIngredientDetailsReducer } from "./burger-ingredient-details";
import { burgerIngredientsReducer } from "./burger-ingredients";
import { orderReducer } from "./order";
import { selectedBurgerIngredientsReducer } from "./selected-burger-ingredients";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerIngredientDetails: burgerIngredientDetailsReducer,
  selectedBurgerIngredients: selectedBurgerIngredientsReducer,
  order: orderReducer,
  user: userReducer,
});
