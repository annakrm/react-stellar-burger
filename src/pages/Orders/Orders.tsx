import type { FC } from "react";
import { useEffect } from "react";

import {
  ordersWsConnectionStart,
  ordersWsConnectionClosed,
} from "~/services/actions";
import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { getAccessToken } from "~/shared/lib/auth";
import { Page } from "~/shared/ui/Page";
import { OrdersList } from "~components/OrdersList";

import styles from "./Orders.module.css";

export const Orders: FC = () => {
  const dispatch = useAppDispatch();

  const orders = useAppSelector(
    ({ ordersWebSocket }) => ordersWebSocket.orders
  );

  useEffect(() => {
    const accessToken = getAccessToken().split(" ")[1];

    dispatch(ordersWsConnectionStart(`?token=${accessToken}`));

    return () => dispatch(ordersWsConnectionClosed());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isOrdersLoaded = orders.length > 0;

  return (
    <Page contentClassNames={styles.wrapper}>
      {isOrdersLoaded && <OrdersList orders={orders} profileView />}
    </Page>
  );
};
