import React from "react";

import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./reset-password.module.css";

export const ResetPasswordPage = () => {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>
        <div className={styles.inputWrapper}>
          <EmailInput
            onChange={onChange}
            value={value}
            name="password"
            placeholder="Введите новый пароль"
            isIcon
            extraClass="mb-6"
          />
          <EmailInput
            onChange={onChange}
            value={value}
            name="email"
            placeholder="Введите код из письма"
            isIcon={false}
          />
        </div>

        <div className="mt-6 mb-20">
          <Button htmlType="button" type="primary" size="large">
            Сохранить
          </Button>
        </div>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль?{" "}
          <a href="/" className={`${styles.link} text text_color_accent`}>
            Войти
          </a>
        </span>
      </div>
    </>
  );
};
