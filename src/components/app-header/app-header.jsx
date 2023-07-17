import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { HeaderLink } from './app-header-link';

import styles from './app-header.module.css';

export const AppHeader = () => (
    <header className={styles.header}>
        <div className={styles.header_content}>
            <div className={styles.link}><BurgerIcon type="primary" /><HeaderLink text="Конструктор" /></div>
            <div className={styles.link}><ListIcon type="primary" /><HeaderLink text="Лента заказов" /></div>

            <span className={styles.logo}><Logo /></span>
            
            <div className={styles.link}><ProfileIcon type="primary" /><HeaderLink text="Личный кабинет" /></div>
        </div>
    </header>
)
