import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerIngredientDetailsReducer } from "./burger-ingredient-details";
import { selectedBurgerIngredientsReducer } from "./selected-burger-ingredients";
import { orderReducer } from "./order";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerIngredientDetails: burgerIngredientDetailsReducer,
  selectedBurgerIngredients: selectedBurgerIngredientsReducer,
  order: orderReducer,
  user: userReducer,
});
