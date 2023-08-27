import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "~/services/types";
import { BurgerIngredientTab } from "~shared/lib/types";

import styles from "./BurgerIngredients.module.css";
import { IngredientsList } from "./IngredientsList";

export const BurgerIngredients: FC = () => {
  const { activeTab } = useSelector(
    ({ burgerIngredients }: RootState) => burgerIngredients
  );

  return (
    <div className={styles.wrapper}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>

      <div className={styles.tabBar}>
        <Tab
          value="one"
          active={activeTab === BurgerIngredientTab.BUNS}
          onClick={() => null}
        >
          Булки
        </Tab>
        <Tab
          value="two"
          active={activeTab === BurgerIngredientTab.SAUCES}
          onClick={() => null}
        >
          Соусы
        </Tab>
        <Tab
          value="three"
          active={activeTab === BurgerIngredientTab.MAIN}
          onClick={() => null}
        >
          Начинки
        </Tab>
      </div>

      <IngredientsList />
    </div>
  );
};
