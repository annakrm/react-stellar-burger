import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { mockedConfiguratorData, mockedConfiguratorPrice, mockedData } from '../../utils/mockedData';
import { useState } from 'react';
import { OrderDetails } from '../order-details';

export const BurgerConstructor = () => {
  const [isOrderDetailsOpened, setOrderDetailsOpened] = useState(false);

  return (
    <>
      <div className={`${styles.wrapper} mt-25`}>
        <div className={`${styles.itemWrapper} ${styles.boundariesItem}`}>
          <ConstructorElement
            type="top"
            isLocked
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={mockedData[0].image}
          />
        </div>
        <div className={`${styles.ingredientsList} custom-scroll pr-2`}>
          {mockedConfiguratorData.map(({ _id: id, name, price, image }) => (
            <div key={id} className={styles.itemWrapper}>
              <DragIcon />
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
            </div>
          ))}
        </div>
        <div className={`${styles.itemWrapper} ${styles.boundariesItem}`}>
          <ConstructorElement
            type="bottom"
            isLocked
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={mockedData[0].image}
          />
        </div>

        <span className={`${styles.orderButtonWrapper} mt-10`}>
          <span className={`${styles.price} text text_type_main-large mr-10`}>{mockedConfiguratorPrice}<CurrencyIcon /></span>
          <Button htmlType="button" type="primary" size="large" onClick={() => setOrderDetailsOpened(true)}>
            Оформить заказ
          </Button>
        </span>
      </div>

      {isOrderDetailsOpened && <OrderDetails onClose={() => setOrderDetailsOpened(false)} />}
    </>
  );
}

