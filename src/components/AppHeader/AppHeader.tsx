import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./AppHeader.module.css";
import { AppHeaderLink } from "./AppHeaderLink";

export const AppHeader: FC = () => (
  <>
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <AppHeaderLink text="Конструктор" IconComponent={BurgerIcon} link="/" />

        <AppHeaderLink
          text="Лента заказов"
          IconComponent={ListIcon}
          link="/feed"
        />

        <NavLink to="/">
          <span className={styles.logo}>
            <Logo />
          </span>
        </NavLink>

        <AppHeaderLink
          text="Личный кабинет"
          IconComponent={ProfileIcon}
          link="/profile"
        />
      </div>
    </header>

    <Outlet />
  </>
);
