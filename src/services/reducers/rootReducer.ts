import { combineReducers } from "redux";

import { burgerIngredientDetailsReducer } from "./burgerIngredientDetails";
import { burgerIngredientsReducer } from "./burgerIngredients";
import { orderReducer } from "./order";
import { orderDetailsReducer } from "./orderDetails";
import { ordersWebSocketReducer } from "./ordersWebSocket";
import { selectedBurgerIngredientsReducer } from "./selectedBurgerIngredients";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  burgerIngredientDetails: burgerIngredientDetailsReducer,
  selectedBurgerIngredients: selectedBurgerIngredientsReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
  ordersWebSocket: ordersWebSocketReducer,
  user: userReducer,
});
