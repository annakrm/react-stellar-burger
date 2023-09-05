import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useCallback, useMemo } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { makeOrder } from "~/services/actions";
import { setOrderDetailsModalOpened } from "~/services/actions/order";
import { reorderSelectedBurgerIngredients } from "~/services/actions/selectedBurgerIngredients";
import { RootState } from "~/services/types";
import { BurgerIngredientType } from "~/shared/api/dto";
import { hasBuns } from "~/shared/lib/hasBuns";

import { BurgerConstructorOrderDetailsModal } from "../BurgerConstructorOrderDetailsModal";

import styles from "./BurgerConstructor.module.css";
import { BurgerConstructorBunPlaceholder } from "./BurgerConstructorBunPlaceholder";
import { BurgerConstructorDraggableItem as DraggableItem } from "./BurgerConstructorDraggableItem";

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();

  const { data: selectedBurgerIngredients } = useSelector(
    ({ selectedBurgerIngredients }: RootState) => selectedBurgerIngredients
  );

  const orderDetailsModalOpened = useSelector(
    ({ order }: RootState) => order.orderDetailsModalOpened
  );

  const userData = useSelector(({ user }: RootState) => user.userData);

  const navigate = useNavigate();

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
        ({ type }) => type === BurgerIngredientType.BUN
      );

      return bun ?? null;
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
    if (userData) {
      const ingredientIds = selectedBurgerIngredients.map(({ _id: id }) => id);

      dispatch(makeOrder(ingredientIds));
    } else {
      navigate("/login");
    }
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
            <span
              className={`${styles.ingredientsPlaceholder} text text_type_main-small text_color_inactive`}
            >
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
            <CurrencyIcon type="primary" />
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

      {orderDetailsModalOpened && (
        <BurgerConstructorOrderDetailsModal
          onClose={() => dispatch(setOrderDetailsModalOpened(false))}
        />
      )}
    </div>
  );
};
