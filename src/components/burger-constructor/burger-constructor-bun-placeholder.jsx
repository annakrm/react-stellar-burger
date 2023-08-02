import styles from './burger-constructor.module.css';

export const BurgerConstructorBunPlaceholder = () => (
  <span className={`${styles.itemWrapper} ${styles.burgerBunPlaceholder} pr-2 text`}>Выберите булку для Вашего бургера</span>
);

