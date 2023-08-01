import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { useRef,  } from 'react';
import { useDispatch,  } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { deleteSelectedBurgerIngredientsItem } from '../../services/actions';


export const BurgerConstructorDraggableItem = ({ data, index, onReorder }) => {
  const dispatch = useDispatch();

  const { _id: ingredientId, name, price, image } = data;

  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: 'BurgerConstructorDraggableItem',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      onReorder(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'BurgerConstructorDraggableItem',
    item: () => {
      return { ingredientId, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const handleDeleteIngredient = (ingredientIndex) => {
    dispatch(deleteSelectedBurgerIngredientsItem(ingredientIndex));
  };

  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (
    <div ref={ref} className={styles.itemWrapper} style={{ opacity }} data-handler-id={handlerId}>
      <DragIcon />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleDeleteIngredient(index)}
      />
    </div>
  );
}

