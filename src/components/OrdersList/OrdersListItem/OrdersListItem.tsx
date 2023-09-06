import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useMemo, Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector } from "~/services/hooks";
import { OrderDto, OrderStatus } from "~/shared/api/dto";

import styles from "./OrdersListItem.module.css";

const MAX_VISIBLE_INGREDIENT_IMAGES = 6;
const LAST_VISIBLE_INGREDIENT_IMAGE_INDEX = 5;
const TOP_INGREDIENT_IMAGE_Z_INDEX = 8;

const DEFAULT_HEIGHT_PX = "214px";
const PROFILE_VIEW_HEIGHT_PX = "246px";

type Props = {
  data: OrderDto;
  profileView: boolean;
  onClick: () => void;
};

export const OrdersListItem: FC<Props> = ({ data, onClick, profileView }) => {
  const {
    _id: orderId,
    ingredients,
    name,
    createdAt,
    number: orderNumber,
    status,
  } = data;

  const burderIngredientsData = useAppSelector(
    ({ burgerIngredients }) => burgerIngredients.data
  );

  const location = useLocation();

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

  const ingredientImages = ingredients.reduce(
    (targetArray, currentIngredientId) => {
      const foundIngredient = burderIngredientsData.find(
        ({ _id }) => _id === currentIngredientId
      );

      if (foundIngredient) {
        const { name, image_mobile: image } = foundIngredient;

        targetArray.push({ id: uuidv4(), name, image });

        return targetArray;
      }

      return targetArray;
    },
    [] as Array<{ id: string; name: string; image: string }>
  );

  const height = profileView ? PROFILE_VIEW_HEIGHT_PX : DEFAULT_HEIGHT_PX;

  const isDone = status === OrderStatus.DONE;
  const isPending = status === OrderStatus.PENDING;
  const isCreated = status === OrderStatus.CREATED;

  return (
    <NavLink
      className={styles.link}
      to={`/${profileView ? "profile/orders" : "feed"}/${orderId}`}
      state={{ background: location }}
    >
      <div
        className={styles.wrapper}
        style={{ height, minHeight: height }}
        onClick={onClick}
      >
        <div className={`${styles.header} mt-6 pl-6 pr-6`}>
          <span className="text text_type_digits-default">
            {`#${orderNumber}`}
          </span>
          <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={new Date(createdAt)}
          />
        </div>

        <div className={styles.description}>
          <span
            className={`${styles.orderName} text text_type_main-medium pl-6 pr-6`}
          >
            {name}
          </span>
          {profileView && (
            <span
              className={`${
                isDone ? styles.statusDone : ""
              } text text_type_main-default pl-6`}
            >
              {isDone && "Выполнен"}
              {isPending && "Готовится"}
              {isCreated && "Создан"}
            </span>
          )}
        </div>

        <div className={`${styles.footer} mb-6 pl-6 pr-6`}>
          <div className={styles.ingredientImagesWrapper}>
            {ingredientImages
              .splice(0, MAX_VISIBLE_INGREDIENT_IMAGES)
              .map(({ id, name, image }, index) => {
                const isLastVisibleItem =
                  index === LAST_VISIBLE_INGREDIENT_IMAGE_INDEX;

                const isMoreThanMaxAvaiable =
                  ingredientImages.length > MAX_VISIBLE_INGREDIENT_IMAGES;

                const hasHiddenItemsCountLabel =
                  isMoreThanMaxAvaiable && isLastVisibleItem;

                return (
                  <Fragment key={id}>
                    <div
                      className={styles.ingredientImagePositionWrapper}
                      style={{ zIndex: TOP_INGREDIENT_IMAGE_Z_INDEX - index }}
                    >
                      <div className={styles.ingredientImageWrapper}>
                        <img
                          src={image}
                          className={styles.ingredientImage}
                          style={{
                            opacity: hasHiddenItemsCountLabel ? 0.5 : 1,
                          }}
                          alt={name}
                        />

                        {hasHiddenItemsCountLabel && (
                          <span
                            className={`${styles.hiddenItemsCountLabel} text text_type_main-default`}
                          >{`+${
                            ingredientImages.length -
                            MAX_VISIBLE_INGREDIENT_IMAGES
                          }`}</span>
                        )}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
          </div>

          <span className={`${styles.price} text text_type_digits-default`}>
            {orderPrice}
            <CurrencyIcon type="primary" />
          </span>
        </div>
      </div>
    </NavLink>
  );
};
