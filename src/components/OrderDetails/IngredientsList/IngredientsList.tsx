import type { FC } from "react";
import { Fragment } from "react";

import type { BurgerIngredientDto } from "~/shared/api/dto";

import styles from "./IngredientsList.module.css";
import { IngredientsListItem } from "./IngredientsListItem";

type Props = {
  data: BurgerIngredientDto[];
};

export const IngredientsList: FC<Props> = ({ data }) => {
  const normailizedData = Object.values(
    data.reduce((targetObj, currentItem) => {
      if (targetObj[currentItem.name]) {
        return {
          ...targetObj,
          [currentItem.name]: {
            data: currentItem,
            count: targetObj[currentItem.name].count + 1,
          },
        };
      }

      return {
        ...targetObj,
        [currentItem.name]: { data: currentItem, count: 1 },
      };
    }, {} as Record<string, { data: BurgerIngredientDto; count: number }>)
  );

  return (
    <div className={`${styles.wrapper} custom-scroll`}>
      {normailizedData.map(({ data, count }) => (
        <Fragment key={data.name}>
          <IngredientsListItem data={data} count={count} />
        </Fragment>
      ))}
      <div />
    </div>
  );
};
