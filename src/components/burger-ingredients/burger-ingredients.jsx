import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';
import { useState } from 'react';
import { IngredientsList } from './ingredients-list';

const BurgerIngredietTabs = {
  BUNS: 'BUNS',
  SAUCES: 'SAUCES',
  MAIN: 'MAIN',
}

export const BurgerIngredients = () => {
  const [activeTab, setActiveTab] = useState(BurgerIngredietTabs.BUNS);

  return (
    <div className={styles.wrapper}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>

      <div className={styles.tabBar}>
        <Tab value="one" active={activeTab === BurgerIngredietTabs.BUNS} onClick={() => setActiveTab(BurgerIngredietTabs.BUNS)}>
          Булки
        </Tab>
        <Tab value="two" active={activeTab === BurgerIngredietTabs.SAUCES} onClick={() => setActiveTab(BurgerIngredietTabs.SAUCES)}>
          Соусы
        </Tab>
        <Tab value="three" active={activeTab === BurgerIngredietTabs.MAIN} onClick={() => setActiveTab(BurgerIngredietTabs.MAIN)}>
          Начинки
        </Tab>
      </div>

      <IngredientsList />
    </div>
  );
};
