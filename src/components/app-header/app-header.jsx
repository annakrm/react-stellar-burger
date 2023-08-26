import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Outlet } from "react-router-dom";

import { HeaderLink } from "./app-header-link";
import styles from "./app-header.module.css";

export const AppHeader = () => (
  <>
    <header className={styles.header}>
      <div className={styles.header_content}>
        <HeaderLink text="Конструктор" IconComponent={BurgerIcon} link="/" />
        <HeaderLink
          text="Лента заказов"
          IconComponent={ListIcon}
          link="/feed"
        />

        <NavLink to="/">
          <span className={styles.logo}>
            <Logo />
          </span>
        </NavLink>

        <HeaderLink
          className="pl-4"
          text="Личный кабинет"
          IconComponent={ProfileIcon}
          link="/profile"
        />
      </div>
    </header>
    <Outlet />
  </>
);
