import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useCallback, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { OrderDetails } from "../order-details";
import { makeOrder } from "../../services/actions";

import { reorderSelectedBurgerIngredients } from "../../services/actions/selected-burger-ingredients";
import { setOrderDetailesModalOpened } from "../../services/actions/order";
import { IngredientType } from "../../utils/constants";

import { hasBuns } from "../../utils/utils";

import { BurgerConstructorBunPlaceholder } from "./burger-constructor-bun-placeholder";
import { BurgerConstructorDraggableItem as DraggableItem } from "./burger-constructor-draggable-item";
import styles from "./burger-constructor.module.css";

export const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { data: selectedBurgerIngredients } = useSelector(
    ({ selectedBurgerIngredients }) => selectedBurgerIngredients
  );

  const { orderDetailesModalOpened } = useSelector(({ order }) => order);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "BurgerIngredientItem",
    drop: () => ({ name: "BurgerConstructor" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isBurgerConstructorDnDActive = canDrop && isOver;

  const ingredientsPrice = useMemo(
    () =>
      selectedBurgerIngredients.reduce(
        (sumIngredientsPrice, { price: ingredientPrice }) =>
          sumIngredientsPrice + ingredientPrice,
        0
      ),
    [selectedBurgerIngredients]
  );

  const bunInfo = useMemo(() => {
    if (selectedBurgerIngredients.length !== 0) {
      const bun = selectedBurgerIngredients.find(
        ({ type }) => type === IngredientType.BUN
      );

      return bun !== -1 ? bun : null;
    }

    return null;
  }, [selectedBurgerIngredients]);

  const itemWithoutBuns = useMemo(() => {
    if (selectedBurgerIngredients.length) {
      return hasBuns(selectedBurgerIngredients)
        ? selectedBurgerIngredients.slice(
            1,
            selectedBurgerIngredients.length - 1
          )
        : selectedBurgerIngredients;
    }

    return [];
  }, [selectedBurgerIngredients]);

  const canMakeOrder = useMemo(() => {
    if (selectedBurgerIngredients.length > 2) {
      return hasBuns(selectedBurgerIngredients);
    }

    return false;
  }, [selectedBurgerIngredients]);

  const handleMakeOrder = () => {
    const ingredientIds = selectedBurgerIngredients.map(({ _id: id }) => id);

    dispatch(makeOrder(ingredientIds));
  };

  const handleReorder = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch(reorderSelectedBurgerIngredients({ dragIndex, hoverIndex }));
    },
    [dispatch]
  );

  return (
    <div ref={drop}>
      <div className={`${styles.wrapper} mt-25`}>
        {bunInfo ? (
          <div className={`${styles.itemWrapper} ${styles.boundariesItem}`}>
            <ConstructorElement
              type="top"
              isLocked
              text={`${bunInfo.name} (верх)`}
              price={bunInfo.price}
              thumbnail={bunInfo.image}
            />
          </div>
        ) : (
          <BurgerConstructorBunPlaceholder />
        )}

        <div
          className={`${styles.ingredientsList} custom-scroll pr-2`}
          style={
            isBurgerConstructorDnDActive
              ? { backgroundColor: "#1c1c21" }
              : undefined
          }
        >
          {itemWithoutBuns.length ? (
            itemWithoutBuns.map((item, idx) => (
              <DraggableItem
                key={item.uniqueId}
                data={item}
                index={idx}
                onReorder={handleReorder}
              />
            ))
          ) : (
            <span className={`${styles.ingredientsPlaceholder} text`}>
              Добавьте ингредиенты в бургер
            </span>
          )}
        </div>

        {bunInfo ? (
          <div className={`${styles.itemWrapper} ${styles.boundariesItem}`}>
            <ConstructorElement
              type="bottom"
              isLocked
              text={`${bunInfo.name} (низ)`}
              price={bunInfo.price}
              thumbnail={bunInfo.image}
            />
          </div>
        ) : (
          <BurgerConstructorBunPlaceholder />
        )}

        <span className={`${styles.orderButtonWrapper} mt-10`}>
          <span className={`${styles.price} text text_type_main-large mr-10`}>
            {ingredientsPrice}
            <CurrencyIcon />
          </span>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={handleMakeOrder}
            disabled={!canMakeOrder}
          >
            Оформить заказ
          </Button>
        </span>
      </div>

      {orderDetailesModalOpened && (
        <OrderDetails
          onClose={() => dispatch(setOrderDetailesModalOpened(false))}
        />
      )}
    </div>
  );
};
