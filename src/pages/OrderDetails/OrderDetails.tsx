import type { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import {
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

  const { id: orderId } = useParams();

  useEffect(() => {
    dispatch(ordersAllWsConnectionStart());

    return () => dispatch(ordersWsConnectionClosed());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (burgerIngredients && orders) {
      const orderDetails = orders.find((item) => item._id === orderId);

      dispatch(setOrderDetails(orderDetails));
    }
  }, [burgerIngredients, orders]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page columnContentAlignment contentClassNames={styles.wrapper}>
      <OrderDetailsComponent pageView />
    </Page>
  );
};
