import { FC } from "react";

import { useAppSelector } from "~/services/hooks";

import styles from "./IngredientDetails.module.css";

export const IngredientDetails: FC = () => {
  const data = useAppSelector(
    ({ burgerIngredientDetails }) => burgerIngredientDetails.data
  );

  if (data) {
    const { image, name, calories, proteins, fat, carbohydrates } = data;

    return (
      <>
        <span className="text text_type_main-large pt-10 pl-10">
          Детали ингредиента
        </span>
        <div className={`${styles.contentWrapper} pb-15`}>
          <img
            className={styles.ingredientImage}
            src={image}
            alt={`Изображение ингредиента бургера: ${name}`}
          />

          <span className="text text_type_main-medium mt-4 mb-8">{name}</span>

          <span className={styles.ingredientProperties}>
            <span className={styles.ingredientProperty}>
              <span className="text text_type_main-default text_color_inactive">
                Калории, ккал
              </span>
              <span className="text text_type_main-default text_color_inactive">
                {calories}
              </span>
            </span>
            <span className={styles.ingredientProperty}>
              <span className="text text_type_main-default text_color_inactive">
                Белки, г
              </span>
              <span className="text text_type_main-default text_color_inactive">
                {proteins}
              </span>
            </span>
            <span className={styles.ingredientProperty}>
              <span className="text text_type_main-default text_color_inactive">
                Жиры, г
              </span>
              <span className="text text_type_main-default text_color_inactive">
                {fat}
              </span>
            </span>
            <span className={styles.ingredientProperty}>
              <span className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </span>
              <span className="text text_type_main-default text_color_inactive">
                {carbohydrates}
              </span>
            </span>
          </span>
        </div>
      </>
    );
  }

  return null;
};
