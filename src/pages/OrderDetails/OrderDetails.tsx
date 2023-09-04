import type { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getBurgerIngredients,
  ordersAllWsConnectionStart,
  ordersWsConnectionClosed,
  setOrderDetails,
} from "~/services/actions";
import { RootState } from "~/services/types";
import { OrderDetails as OrderDetailsComponent } from "~components/OrderDetails";
import { Page } from "~shared/ui/Page";

import styles from "./OrderDetails.module.css";

export const OrderDetails: FC = () => {
  const dispatch = useDispatch();

  const burgerIngredients = useSelector(
    ({ burgerIngredients }: RootState) => burgerIngredients.data
  );

  const orders = useSelector(
    ({ ordersWebSocket }: RootState) => ordersWebSocket.orders
  );

  const orderDetails = useSelector(
    ({ orderDetails }: RootState) => orderDetails.data
  );

  useEffect(() => {
    dispatch(ordersAllWsConnectionStart());

    if (burgerIngredients.length === 0) {
      dispatch(getBurgerIngredients());
    }

    return () => dispatch(ordersWsConnectionClosed());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (burgerIngredients && orders && !orderDetails) {
      const currentUrl = window.location.href;
      const orderId = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

      const orderDetails = orders.find((item) => item._id === orderId);

      dispatch(setOrderDetails(orderDetails));
    }
  }, [burgerIngredients, orders, orderDetails]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page columnContentAlignment contentClassNames={styles.wrapper}>
      <OrderDetailsComponent pageView />
    </Page>
  );
};
