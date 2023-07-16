import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { HeaderLink } from './app-header-link';

import styles from './app-header.module.css';

export const AppHeader = () => (
    <header className={styles.header}>
        <div className={styles.header_content}>
            <a href="/"><div className={styles.link}><BurgerIcon type="primary" /><HeaderLink text="Конструктор" /></div></a>
            <a href="/"><div className={styles.link}><ListIcon type="primary" /><HeaderLink text="Лента заказов" /></div></a>

            <a href="/" className={styles.logo}><Logo /></a>
            
            <a href="/"><div className={styles.link}><ProfileIcon type="primary" /><HeaderLink text="Личный кабинет" /></div></a>
        </div>
    </header>
)
