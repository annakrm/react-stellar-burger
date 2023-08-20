import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { useSelector } from "react-redux";

import { BurgerIngredientTab } from "../../utils/constants";

import styles from "./burger-ingredients.module.css";
import { IngredientsList } from "./ingredients-list";

export const BurgerIngredients = () => {
  const { activeTab } = useSelector(
    ({ burgerIngredients }) => burgerIngredients
  );

  return (
    <div className={styles.wrapper}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>

      <div className={styles.tabBar}>
        <Tab value="one" active={activeTab === BurgerIngredientTab.BUNS}>
          Булки
        </Tab>
        <Tab value="two" active={activeTab === BurgerIngredientTab.SAUCES}>
          Соусы
        </Tab>
        <Tab value="three" active={activeTab === BurgerIngredientTab.MAIN}>
          Начинки
        </Tab>
      </div>

      <IngredientsList />
    </div>
  );
};
