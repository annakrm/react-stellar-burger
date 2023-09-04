import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useMemo, Fragment } from "react";
import { useSelector } from "react-redux";

import { RootState } from "~/services/types";
import { OrderDto } from "~/shared/api/dto";

import styles from "./OrdersListItem.module.css";

const TOP_INGREDIENT_IMAGE_Z_INDEX = 8;

type Props = {
  data: OrderDto;
  height?: string;
  onClick: (data: OrderDto) => void;
};

export const OrdersListItem: FC<Props> = ({ data, height = "214px" }) => {
  const { ingredients, name, createdAt, number: orderNumber } = data;

  const burderIngredientsData = useSelector(
    ({ burgerIngredients }: RootState) => burgerIngredients.data
  );

  const orderPrice = useMemo(() => {
    return ingredients.reduce((targetPrice, currentIngredientId) => {
      const foundIngredient = burderIngredientsData.find(
        ({ _id }) => _id === currentIngredientId
      );

      if (foundIngredient) {
        return targetPrice + foundIngredient.price;
      }

      return targetPrice;
    }, 0);
  }, [ingredients, burderIngredientsData]);

  const ingredientImages = useMemo(() => {
    return ingredients.reduce((targetArray, currentIngredientId) => {
      const foundIngredient = burderIngredientsData.find(
        ({ _id }) => _id === currentIngredientId
      );

      if (foundIngredient) {
        const { _id: id, name, image_mobile: image } = foundIngredient;

        targetArray.push({ id, name, image });

        return targetArray;
      }

      return targetArray;
    }, [] as Array<{ id: string; name: string; image: string }>);
  }, [ingredients, burderIngredientsData]);

  return (
    <div className={styles.wrapper} style={{ height, minHeight: height }}>
      <div className={`${styles.header} mt-6 pl-6 pr-6`}>
        <span className="text text_type_digits-default">
          {`#${orderNumber}`}
        </span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(createdAt)}
        />
      </div>

      <span
        className={`${styles.orderName} text text_type_main-medium pl-6 pr-6`}
      >
        {name}
      </span>

      <div className={`${styles.footer} mb-6 pl-6 pr-6`}>
        <div className={styles.ingredientImagesWrapper}>
          {ingredientImages.map(({ id, name, image }, index) => (
            <Fragment key={id}>
              <div
                className={styles.ingredientImagePositionWrapper}
                style={{ zIndex: TOP_INGREDIENT_IMAGE_Z_INDEX - index }}
              >
                <div className={styles.ingredientImageWrapper}>
                  <img
                    src={image}
                    className={styles.ingredientImage}
                    alt={name}
                  />
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        <span className={`${styles.price} text text_type_digits-default`}>
          {orderPrice}
          <CurrencyIcon type="primary" />
        </span>
      </div>
    </div>
  );
};
