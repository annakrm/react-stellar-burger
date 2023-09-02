import type { FC } from "react";
import { Fragment } from "react";

import type { BurgerIngredientDto } from "~/shared/api/dto";

import styles from "./IngredientsCategory.module.css";
import { IngredientsListItem } from "./IngredientsListItem";

type Props = {
  id: string;
  title: string;
  items: BurgerIngredientDto[];
  onOpenIngredientDetails: (data: BurgerIngredientDto) => void;
};

export const IngredientsCategory: FC<Props> = ({
  id,
  title,
  items,
  onOpenIngredientDetails,
}) => (
  <div id={id} className={styles.wrapper}>
    <h3 className="text text_type_main-medium mt-10 mb-6">{title}</h3>

    <div className={styles.content}>
      {items.map((item) => (
        <Fragment key={item._id}>
          <IngredientsListItem
            data={item}
            onOpenIngredientDetails={onOpenIngredientDetails}
          />
        </Fragment>
      ))}
    </div>
  </div>
);
