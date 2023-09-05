import type { FC } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { logout } from "~/services/actions/user";

import styles from "./Profile.module.css";

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const setActiveText = ({ isActive }) => {
    return isActive ? styles.linkActive : styles.link;
  };

  const handleLogout = () => {
    dispatch(logout());
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
          <NavLink to="#" className={setActiveText} onClick={handleLogout}>
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

      <div className={styles.contentWeapper}>
        {" "}
        <Outlet />
      </div>
      <div />
    </div>
  );
};
