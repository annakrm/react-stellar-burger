import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useMemo } from "react";
import { useDrag } from "react-dnd";
import { NavLink, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { addItemToIngredientsArray } from "~/shared/lib/burgerConstructor";
import { updateSelectedBurgerIngredientsData } from "~services/actions";
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
          const updatedSelectedIngredientsData = addItemToIngredientsArray(
            ingredient,
            selectedBurgerIngredients
          );

          dispatch(
            updateSelectedBurgerIngredientsData(updatedSelectedIngredientsData)
          );
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [data, selectedBurgerIngredients]
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
