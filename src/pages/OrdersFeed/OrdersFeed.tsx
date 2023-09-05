import type { FC } from "react";

import styles from "./OrdersFeed.module.css";

export const OrdersFeed: FC = () => {
  return (
    <>
      <div className={styles.feed}>
        <p className="text text_type_main-medium text_color_primary">
          Скоро здесь будет Лента заказов
        </p>
      </div>
    </>
  );
};
