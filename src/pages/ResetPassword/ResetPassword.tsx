import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { ChangeEvent, FC } from "react";
import { useState } from "react";

import styles from "./ResetPassword.module.css";

export const ResetPassword: FC = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
