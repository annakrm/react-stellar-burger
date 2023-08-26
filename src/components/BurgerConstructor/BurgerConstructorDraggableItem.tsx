import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import { deleteSelectedBurgerIngredientsItem } from "~/services/actions";

import { BurgerIngredient } from "../../shared/lib/types";

import styles from "./BurgerConstructor.module.css";

type Props = {
  data: BurgerIngredient;
  index: number;
  onReorder: (dragIndex: number, hoverIndex: number) => void;
};

export const BurgerConstructorDraggableItem: FC<Props> = ({
  data,
  index,
  onReorder,
}) => {
  const dispatch = useDispatch();

  const { _id: ingredientId, name, price, image } = data;

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

  const handleDeleteIngredient = (ingredientIndex) => {
    dispatch(deleteSelectedBurgerIngredientsItem(ingredientIndex));
  };

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
        handleClose={() => handleDeleteIngredient(index)}
      />
    </div>
  );
};
