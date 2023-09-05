import type { FC } from "react";
import { useEffect } from "react";

import {
  ordersWsConnectionStart,
  ordersWsConnectionClosed,
} from "~/services/actions";
import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { RootState } from "~/services/types";
import { Page } from "~/shared/ui/Page";
import { OrdersList } from "~components/OrdersList";

import styles from "./OrdersFeed.module.css";
import { OrdersFeedInfo } from "./OrdersFeedInfo";

export const OrdersFeed: FC = () => {
  const dispatch = useAppDispatch();

  const { orders, total, totalToday } = useAppSelector(
    ({ ordersWebSocket }: RootState) => ordersWebSocket
  );

  useEffect(() => {
    dispatch(ordersWsConnectionStart("/all"));

    return () => dispatch(ordersWsConnectionClosed());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isOrdersLoaded = orders.length > 0;

  return (
    <Page contentClassNames={styles.wrapper}>
      {isOrdersLoaded && (
        <>
          <div>
            <h1 className="text text_type_main-large mt-10 mb-5">
              Лента заказов
            </h1>
            <OrdersList orders={orders} />
          </div>

          <OrdersFeedInfo
            orders={orders}
            total={total}
            totalToday={totalToday}
          />
        </>
      )}
    </Page>
  );
};
