import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useState } from "react";

import styles from "./forgot-password.module.css";

export const ForgotPasswordPage = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {};

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
            name="email"
            placeholder="Укажите e-mail"
            isIcon={false}
            extraClass="mb-6"
          />
        </div>
        <div className="mt-6 mb-20">
          <Button htmlType="button" type="primary" size="large">
            Восстановить
          </Button>
        </div>
        <span className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль?{" "}
          <a
            href="/login"
            onClick={onClick}
            className={`${styles.link} text text_color_accent`}
          >
            Войти
          </a>
        </span>
      </div>
    </>
  );
};
