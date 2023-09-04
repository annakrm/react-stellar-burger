import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "~/services/types";
import { addSelectedBurgerIngredientsItem } from "~services/actions";
import type { BurgerIngredientDto } from "~shared/api/dto";

import styles from "./IngredientsListItem.module.css";

type Props = {
  data: BurgerIngredientDto;
  onOpenIngredientDetails: (data: BurgerIngredientDto) => void;
};

export const IngredientsListItem: FC<Props> = ({
  data,
  onOpenIngredientDetails,
}) => {
  const dispatch = useDispatch();

  const { data: selectedBurgerIngredients } = useSelector(
    ({ selectedBurgerIngredients }: RootState) => selectedBurgerIngredients
  );

  const { _id: ingredientId, image: imageUrl, name, price } = data;

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, drag] = useDrag(
    () => ({
      type: "BurgerIngredientItem",
      item: data,
      end: (ingredient, monitor) => {
        const dropResult = monitor.getDropResult();

        if (ingredient && dropResult) {
          dispatch(addSelectedBurgerIngredientsItem(ingredient));
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [data]
  );

  const addedCount = useMemo(
    () =>
      selectedBurgerIngredients.filter(({ _id: id }) => id === ingredientId)
        .length || 0,
    [selectedBurgerIngredients, ingredientId]
  );

  return (
    <div
      ref={drag}
      className={styles.wrapper}
      onClick={() => onOpenIngredientDetails(data)}
    >
      <img src={imageUrl} alt={`Изображение ингредиента бургера: ${name}`} />

      <span
        className={`${styles.price} text text_type_digits-default mt-1 mb-1`}
      >
        {price}
        <CurrencyIcon type="primary" />
      </span>

      <span className="text text_type_main-default">{name}</span>

      {Boolean(addedCount) && (
        <div className={styles.counterWrapper}>
          <Counter count={addedCount} />
        </div>
      )}
    </div>
  );
};
