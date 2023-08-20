import React from "react";
import styles from "./profile.module.css";
import { NavLink, Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export const Profile = () => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
    
    const setActiveText = ({isActive}) => {
      return isActive ? styles.link_active : styles.link
    }

    return (
        <div className={styles.profile}>
          <div className={styles.navbar_container}>
              <div className={styles.navbar}>
                <NavLink to='/profile' className={setActiveText}>Профиль</NavLink>
                <NavLink to='/profile/orders' className={setActiveText}>История заказов</NavLink>
                <NavLink to='/' className={setActiveText}>Выход</NavLink>
              </div>
              <div className={styles.info_container}>
                  <span className="text text_type_main-default text_color_inactive">В этом разделе вы можете</span>
                  <span className="text text_type_main-default text_color_inactive">изменить свои персональные данные</span>
              </div>
          </div>

          <div> <Outlet /></div>
          <div />
        </div>
      )
}