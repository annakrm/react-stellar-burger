import React from "react";
import styles from "./profile.module.css";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Profile = () => {
    const [value, setValue] = React.useState('')
    const onChange = e => {
    setValue(e.target.value)
    }
    
    const setActiveText = ({isActive}) => {
      return isActive ? styles.link_active : styles.link
    }

    return (
        <>
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

        <Outlet />

        </div>
        </>
      )
}