import type { FC } from "react";

import styles from "./Orders.module.css";

export const Orders: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <p className="text text_type_main-medium text_color_primary">
          Скоро здесь будет История заказов
        </p>
      </div>
    </>
  );
};
