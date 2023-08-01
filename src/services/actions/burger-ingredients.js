import { stellarBurgerApi } from '../../utils/api';
import { 
    BURGER_INGREDIENTS_GET_DATA_FAILED,
    BURGER_INGREDIENTS_GET_DATA_SUCCESS,
    BURGER_INGREDIENTS_SET_ACTIVE_TAB,
} from '../constants';


export const getBurgerIngredients = () => {
  return (dispatch) => {
    stellarBurgerApi.burgerIngredients.getBurgerIngredients().then(({ data }) => {
        dispatch({
          type: BURGER_INGREDIENTS_GET_DATA_SUCCESS,
          data,
        })
    }).catch(err => {
        dispatch({
            type: BURGER_INGREDIENTS_GET_DATA_FAILED,
            error: err,
        });
    })
  }
};

export const setBurgerIngredientsActiveTab = (activeTab) => ({
    type: BURGER_INGREDIENTS_SET_ACTIVE_TAB,
    activeTab
});