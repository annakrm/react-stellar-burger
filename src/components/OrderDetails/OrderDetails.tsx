import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

import { useAppSelector } from "~/services/hooks";
import { OrderStatus } from "~/shared/api/dto";

import { IngredientsList } from "./IngredientsList";
import styles from "./OrderDetails.module.css";

type Props = {
  pageView?: boolean;
};

export const OrderDetails: FC<Props> = ({ pageView }) => {
  const data = useAppSelector(({ orderDetails }) => orderDetails.data);

  const burgerIngredients = useAppSelector(
    ({ burgerIngredients }) => burgerIngredients.data
  );

  if (data) {
    const { number: orderNumber, name, status, ingredients, createdAt } = data;

    const isDone = status === OrderStatus.DONE;
    const isPending = status === OrderStatus.PENDING;
    const isCreated = status === OrderStatus.CREATED;

    const ingredientsData = ingredients.map((ingredientId) =>
      burgerIngredients.find(({ _id }) => _id === ingredientId)
    );

    const orderPrice = ingredientsData.reduce(
      (sum, currentOrder) => sum + currentOrder.price,
      0
    );

    return (
      <div
        className={`${styles.wrapper} ${
          pageView ? "" : styles.wrapperWithPadding
        }`}
      >
        <div className={styles.header}>
          <span
            className={`${styles.orderNumber} ${
              pageView ? styles.orderNumberCentered : ""
            } text text_type_digits-default`}
          >
            {`#${orderNumber}`}
          </span>

          <div className={`${styles.description}`}>
            <span className={`${styles.orderName} text text_type_main-medium`}>
              {name}
            </span>
            <span
              className={`${
                isDone ? styles.statusDone : ""
              } text text_type_main-default`}
            >
              {isDone && "Выполнен"}
              {isPending && "Готовится"}
              {isCreated && "Создан"}
            </span>
          </div>
        </div>

        <div className={`${styles.content} mt-15`}>
          <span className="text text_type_main-medium">Состав:</span>
          <IngredientsList data={ingredientsData} />
        </div>

        <div className={`${styles.footer} mt-10 mb-10`}>
          <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={new Date(createdAt)}
          />

          <span className={`${styles.price} text text_type_digits-default`}>
            {orderPrice}
            <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>
    );
  }

  return null;
};
