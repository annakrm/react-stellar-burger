import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { HeaderLink } from './app-header-link';

import styles from './app-header.module.css';

export const AppHeader = () => (
    <header className={styles.header}>
        <div className={styles.header_content}>
            <HeaderLink text="Конструктор" IconComponent={BurgerIcon} />
            <HeaderLink text="Лента заказов" IconComponent={ListIcon} />

            <span className={styles.logo}><Logo /></span>
            
            <HeaderLink text="Личный кабинет" IconComponent={ProfileIcon} />
        </div>
    </header>
)
