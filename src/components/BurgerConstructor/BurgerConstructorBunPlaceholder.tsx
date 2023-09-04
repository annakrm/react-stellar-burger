import type { FC } from "react";

import styles from "./BurgerConstructor.module.css";

export const BurgerConstructorBunPlaceholder: FC = () => (
  <span
    className={`${styles.itemWrapper} ${styles.burgerBunPlaceholder} pr-2 text text_type_main-small text_color_inactive`}
  >
    Выберите булку для Вашего бургера
  </span>
);
