import React from "react";
import styles from "./login.module.css";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [value, setValue] = React.useState('')
    const onChange = e => {
    setValue(e.target.value)
    }

    const navigate = useNavigate();

    const onClick = () => {
      navigate(onClick);
    };
    return (
        <>
        <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">Вход</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <EmailInput
            onChange={onChange}
            value={value}
            name={'email'}
            placeholder="E-mail"
            isIcon={false}
            extraClass="mb-6"
          />
          <EmailInput
            onChange={onChange}
            value={value}
            name={'password'}
            placeholder="Пароль"
            isIcon={true}
          />
        </div>
        <div className="mt-6 mb-20">
        <Button htmlType="button" type="primary" size="large">
        Войти
        </Button>
        </div>
        <span className="text text_type_main-default text_color_inactive mb-4">
            Вы - новый пользователь? <a href="/register" onClick={onClick} className={`${styles.link} text text_color_accent`}>Зарегистрироваться</a>
        </span>
        <span className="text text_type_main-default text_color_inactive">
            Забыли пароль? <a href="/forgot-password" onClick={onClick} className={`${styles.link} text text_color_accent`}>Восстановить пароль</a>
        </span>
        </div>
        </>
      )
}