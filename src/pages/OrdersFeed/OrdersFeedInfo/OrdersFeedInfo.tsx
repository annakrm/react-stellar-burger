import type { FC } from "react";
import { Fragment } from "react";

import styles from "./OrdersFeedInfo.module.css";

export const OrdersFeedInfo: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.status}>
        <div className={styles.statusColumn}>
          <span className="text text_type_main-default">Готовы:</span>
          <div className={styles.statusOrderNumbersWrapper}>
            {["034533", "034533", "034533", "034533", "034533"].map((item) => (
              <Fragment key={item}>
                <span
                  className={`${styles.statusReadyItem} text text_type_digits-default`}
                >
                  {item}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
        <div className={styles.statusColumn}>
          <span className="text text_type_main-default">В работе:</span>
          <div className={styles.statusOrderNumbersWrapper}>
            {["034533", "034533", "034533"].map((item) => (
              <Fragment key={item}>
                <span className="text text_type_digits-default">{item}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.doneAllTime}>
        <span className="text text_type_main-default">
          Выполнено за все время:
        </span>
        <span className="text text_type_digits-large">{28752}</span>
      </div>

      <div className={styles.doneToday}>
        <span className="text text_type_main-default">
          Выполнено за сегодня:
        </span>
        <span className="text text_type_digits-large">{138}</span>
      </div>
    </div>
  );
};
