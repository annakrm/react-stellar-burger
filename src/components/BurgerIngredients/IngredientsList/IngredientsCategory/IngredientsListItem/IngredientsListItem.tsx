import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { NavLink, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "~/services/hooks";
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
  const dispatch = useAppDispatch();

  const { data: selectedBurgerIngredients } = useAppSelector(
    ({ selectedBurgerIngredients }) => selectedBurgerIngredients
  );

  const { _id: ingredientId, image: imageUrl, name, price } = data;

  const location = useLocation();

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [_, drag] = useDrag(
    () => ({
      type: "BurgerIngredientItem",
      item: data,
      end: (ingredient, monitor) => {
        const dropResult = monitor.getDropResult();

        if (ingredient && dropResult) {
          dispatch(
            addSelectedBurgerIngredientsItem({
              ...ingredient,
              uniqueId: uuidv4(),
            })
          );
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
    <NavLink
      ref={drag}
      className={styles.wrapper}
      to={`/ingredients/${ingredientId}`}
      state={{ background: location }}
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
    </NavLink>
  );
};
