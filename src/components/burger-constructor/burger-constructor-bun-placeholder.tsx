import styles from "./burger-constructor.module.css";

export const BurgerConstructorBunPlaceholder = () => (
  <span
    className={`${styles.itemWrapper} ${styles.burgerBunPlaceholder} pr-2 text text_type_main-small text_color_inactive`}
  >
    Выберите булку для Вашего бургера
  </span>
);
