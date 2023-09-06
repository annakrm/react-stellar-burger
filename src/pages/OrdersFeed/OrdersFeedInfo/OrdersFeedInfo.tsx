import type { FC } from "react";
import { Fragment, useMemo } from "react";

import { OrderDto, OrderStatus } from "~/shared/api/dto";

import styles from "./OrdersFeedInfo.module.css";

type Props = {
  orders: OrderDto[];
  total: number;
  totalToday: number;
};

export const OrdersFeedInfo: FC<Props> = ({ orders, total, totalToday }) => {
  const doneOrderNumbers = useMemo(
    () =>
      orders
        .filter(({ status }) => status === OrderStatus.DONE)
        .map(({ _id: id, number }) => ({ id, number })),
    [orders]
  );
  const pendingOrderNumbers = useMemo(
    () =>
      orders
        .filter(({ status }) => status === OrderStatus.PENDING)
        .map(({ _id: id, number }) => ({ id, number })),
    [orders]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.status}>
        <div className={styles.statusColumn}>
          <span className="text text_type_main-default">Готовы:</span>
          <div className={styles.statusOrderNumbersWrapper}>
            {doneOrderNumbers.length ? (
              doneOrderNumbers.map(({ id, number }) => (
                <Fragment key={id}>
                  <span
                    className={`${styles.statusReadyItem} text text_type_digits-default`}
                  >
                    {number}
                  </span>
                </Fragment>
              ))
            ) : (
              <span className="text text_type_main-default">-</span>
            )}
          </div>
        </div>
        <div className={styles.statusColumn}>
          <span className="text text_type_main-default">В работе:</span>
          <div className={styles.statusOrderNumbersWrapper}>
            {pendingOrderNumbers.length ? (
              pendingOrderNumbers.map(({ id, number }) => (
                <Fragment key={id}>
                  <span className="text text_type_digits-default">
                    {number}
                  </span>
                </Fragment>
              ))
            ) : (
              <span className="text text_type_main-default">-</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.doneAllTime}>
        <span className="text text_type_main-default">
          Выполнено за все время:
        </span>
        <span className="text text_type_digits-large">{total}</span>
      </div>

      <div className={styles.doneToday}>
        <span className="text text_type_main-default">
          Выполнено за сегодня:
        </span>
        <span className="text text_type_digits-large">{totalToday}</span>
      </div>
    </div>
  );
};
