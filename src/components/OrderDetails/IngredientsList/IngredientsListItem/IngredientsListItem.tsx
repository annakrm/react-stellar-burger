import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

import { BurgerIngredientDto } from "~/shared/api/dto";

import styles from "./IngredientsListItem.module.css";

type Props = {
  data: BurgerIngredientDto;
  count: number;
};

export const IngredientsListItem: FC<Props> = ({ data, count }) => {
  const { name, image_mobile: image, price } = data;

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <div className={styles.ingredientImageWrapper}>
          <img src={image} className={styles.ingredientImage} alt={name} />
        </div>
        <span className="text text_type_main-default">{name}</span>
      </div>

      <div className={`${styles.price} text text_type_digits-default`}>
        {`${count} x ${price}`}
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};
