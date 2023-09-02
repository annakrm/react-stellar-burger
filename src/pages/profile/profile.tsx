import type { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./Profile.module.css";

export const Profile: FC = () => {
  const setActiveText = ({ isActive }) => {
    return isActive ? styles.linkActive : styles.link;
  };

  return (
    <div className={styles.profile}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <NavLink to="/profile" className={setActiveText}>
            Профиль
          </NavLink>
          <NavLink to="/profile/orders" className={setActiveText}>
            История заказов
          </NavLink>
          <NavLink to="/" className={setActiveText}>
            Выход
          </NavLink>
        </div>

        <div className={styles.infoContainer}>
          <span className="text text_type_main-default">
            В этом разделе вы можете
          </span>
          <span className="text text_type_main-default">
            изменить свои персональные данные
          </span>
        </div>
      </div>

      <div>
        {" "}
        <Outlet />
      </div>
      <div />
    </div>
  );
};
