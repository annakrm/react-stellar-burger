import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';
import { useState } from 'react';
import { IngredientsList } from './ingredients-list';

const BurgerIngredientTabs = {
  BUNS: 'BUNS',
  SAUCES: 'SAUCES',
  MAIN: 'MAIN',
}

export const BurgerIngredients = () => {
  const [activeTab, setActiveTab] = useState(BurgerIngredientTabs.BUNS);

  return (
    <div className={styles.wrapper}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>

      <div className={styles.tabBar}>
        <Tab value="one" active={activeTab === BurgerIngredientTabs.BUNS} onClick={() => setActiveTab(BurgerIngredientTabs.BUNS)}>
          Булки
        </Tab>
        <Tab value="two" active={activeTab === BurgerIngredientTabs.SAUCES} onClick={() => setActiveTab(BurgerIngredientTabs.SAUCES)}>
          Соусы
        </Tab>
        <Tab value="three" active={activeTab === BurgerIngredientTabs.MAIN} onClick={() => setActiveTab(BurgerIngredientTabs.MAIN)}>
          Начинки
        </Tab>
      </div>

      <IngredientsList />
    </div>
  );
};
