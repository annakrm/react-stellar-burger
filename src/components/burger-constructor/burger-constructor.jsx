import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { useCallback, useMemo, useState } from 'react';
import { OrderDetails } from '../order-details';
import { useDispatch, useSelector } from 'react-redux';
import { IngredientType } from '../../utils/constants';
import { useDrop } from 'react-dnd';
import { makeOrder } from '../../utils/api';
import { setOrderDetails } from '../../services/actions/order-details';

import { BurgerConstructorDraggableItem as DraggableItem } from './burger-constructor-draggable-item';
import { reorderSelectedBurgerIngredients } from '../../services/actions/selected-burger-ingredients';

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { data: selectedBurgerIngredients } = useSelector(({ selectedBurgerIngredients }) => selectedBurgerIngredients );

  const [isOrderDetailsOpened, setOrderDetailsOpened] = useState(false);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'BurgerIngredientItem',
    drop: () => ({ name: 'BurgerConstructor' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isBurgerConstructorDnDActive = canDrop && isOver;

  const ingredientsPrice = useMemo(() => selectedBurgerIngredients.reduce((sumIngredientsPrice, { price: ingredientPrice }) => sumIngredientsPrice + ingredientPrice, 0), [selectedBurgerIngredients])

  const topBun = selectedBurgerIngredients[0];
  const topBunName = `${topBun.name} (верх)`;

  const bottomBun = selectedBurgerIngredients[0];
  const bottomBunName = `${topBun.name} (низ)`;

  const bunImage = topBun.image;

  const itemWithoutBuns = useMemo(() => selectedBurgerIngredients.length > 2 ? selectedBurgerIngredients.slice(1, selectedBurgerIngredients.length - 1) : [], [selectedBurgerIngredients]);

  const canMakeOrder = useMemo(() => selectedBurgerIngredients.length > 2, [selectedBurgerIngredients]);

  const handleMakeOrder = async () => {
    const ingredientIds = selectedBurgerIngredients.map((({ _id: id }) => id));

    const { name, order } = await makeOrder(ingredientIds);

    dispatch(setOrderDetails({ name, order }));
    setOrderDetailsOpened(true);
  }

  const handleReorder = useCallback((dragIndex, hoverIndex) => {
    dispatch(reorderSelectedBurgerIngredients({ dragIndex, hoverIndex }));
  }, [dispatch])

  return (
    <>
      <div className={`${styles.wrapper} mt-25`}>
        <div className={`${styles.itemWrapper} ${styles.boundariesItem}`}>
          <ConstructorElement
            type="top"
            isLocked
            text={topBunName}
            price={topBun.price}
            thumbnail={bunImage}
          />
        </div>

        <div ref={drop} className={`${styles.ingredientsList} custom-scroll pr-2`} style={isBurgerConstructorDnDActive ? { backgroundColor: '#1c1c21' } : undefined}>
          {itemWithoutBuns.map((data, idx) => {
            const { _id: id, name } = data;
            const key = `${id}-${name}-${idx}`;

            return (
              <DraggableItem key={key} data={data} index={idx} onReorder={handleReorder} />
            );
          })}
        </div>

        <div className={`${styles.itemWrapper} ${styles.boundariesItem}`}>
          <ConstructorElement
            type="bottom"
            isLocked
            text={bottomBunName}
            price={bottomBun.price}
            thumbnail={bunImage}
          />
        </div>

        <span className={`${styles.orderButtonWrapper} mt-10`}>
          <span className={`${styles.price} text text_type_main-large mr-10`}>{ingredientsPrice}<CurrencyIcon /></span>
          <Button htmlType="button" type="primary" size="large" onClick={handleMakeOrder} disabled={!canMakeOrder}>
            Оформить заказ
          </Button>
        </span>
      </div>

      {isOrderDetailsOpened && <OrderDetails onClose={() => setOrderDetailsOpened(false)} />}
    </>
  );
}

