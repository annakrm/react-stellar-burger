import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import { updateSelectedBurgerIngredientsData } from "~/services/actions";
import { useAppDispatch, useAppSelector } from "~/services/hooks";
import type { BurgerIngredientDto } from "~/shared/api/dto";
import { removeItemFromIngredientsArray } from "~/shared/lib/burgerConstructor/removeItemFromIngredientsArray";

import styles from "./BurgerConstructor.module.css";

type Props = {
  data: BurgerIngredientDto;
  index: number;
  onReorder: (dragIndex: number, hoverIndex: number) => void;
};

export const BurgerConstructorDraggableItem: FC<Props> = ({
  data,
  index,
  onReorder,
}) => {
  const dispatch = useAppDispatch();

  const { _id: ingredientId, name, price, image } = data;

  const { data: selectedBurgerIngredients } = useAppSelector(
    ({ selectedBurgerIngredients }) => selectedBurgerIngredients
  );

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "BurgerConstructorDraggableItem",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onReorder(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "BurgerConstructorDraggableItem",
    item: () => {
      return { ingredientId, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleRemoveIngredient = useCallback(
    (ingredientIndex) => {
      const updatedSelectedIngredientsData = removeItemFromIngredientsArray(
        ingredientIndex,
        selectedBurgerIngredients
      );

      dispatch(
        updateSelectedBurgerIngredientsData(updatedSelectedIngredientsData)
      );
    },
    [dispatch, selectedBurgerIngredients]
  );

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={styles.itemWrapper}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleRemoveIngredient(index)}
      />
    </div>
  );
};
