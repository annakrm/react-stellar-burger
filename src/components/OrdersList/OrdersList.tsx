import type { FC } from "react";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBurgerIngredients, setOrderDetails } from "~/services/actions";
import { RootState } from "~/services/types";
import { OrderDto } from "~/shared/api/dto";
import { Modal } from "~/shared/ui/Modal";

import { OrderDetails } from "../OrderDetails";

import styles from "./OrdersList.module.css";
import { OrdersListItem } from "./OrdersListItem";

type Props = {
  orders: OrderDto[];
};

export const OrdersList: FC<Props> = ({ orders }) => {
  const dispatch = useDispatch();

  const burgerIngredients = useSelector(
    ({ burgerIngredients }: RootState) => burgerIngredients.data
  );

  const orderDetails = useSelector(
    ({ orderDetails }: RootState) => orderDetails.data
  );

  useEffect(() => {
    if (burgerIngredients.length === 0) {
      dispatch(getBurgerIngredients());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOrderClick = (data: OrderDto) => {
    window.history.replaceState({}, "", data ? `/feed/${data._id}` : "/");

    dispatch(setOrderDetails(data));
  };

  return (
    <div>
      <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
      <div className={`${styles.list} custom-scroll`}>
        {orders.map((data) => (
          <Fragment key={data._id}>
            <OrdersListItem
              data={data}
              onClick={() => handleOrderClick(data)}
            />
          </Fragment>
        ))}

        {Boolean(orderDetails) && (
          <Modal onClose={() => handleOrderClick(null)}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </div>
  );
};
