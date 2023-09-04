import type { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ordersAllWsConnectionStart,
  ordersWsConnectionClosed,
} from "~/services/actions";
import { RootState } from "~/services/types";
import { Page } from "~/shared/ui/Page";
import { OrdersList } from "~components/OrdersList";

import styles from "./OrdersFeed.module.css";
import { OrdersFeedInfo } from "./OrdersFeedInfo";

export const OrdersFeed: FC = () => {
  const dispatch = useDispatch();

  const { orders, total, totalToday } = useSelector(
    ({ ordersWebSocket }: RootState) => ordersWebSocket
  );

  useEffect(() => {
    dispatch(ordersAllWsConnectionStart());

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
