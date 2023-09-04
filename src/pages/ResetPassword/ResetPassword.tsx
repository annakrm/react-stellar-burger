import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { ChangeEvent, FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { resetPassword } from "~/services/actions/user";

import styles from "./ResetPassword.module.css";

export const ResetPassword: FC = () => {
  const dispatch = useDispatch();

  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [codeInputValue, setCodeInputValue] = useState("");

  const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleCodeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCodeInputValue(event.target.value);
  };

  const handleResetPassword = () => {
    const requestData = {
      password: passwordInputValue,
      token: codeInputValue,
    };

    dispatch(resetPassword(requestData));
  };

  return (
    <>
      <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>

        <div className={styles.inputWrapper}>
          <Input
            onChange={handlePasswordInputChange}
            value={passwordInputValue}
            name="password"
            placeholder="Введите новый пароль"
            extraClass="mb-6"
          />
          <Input
            onChange={handleCodeInputChange}
            value={codeInputValue}
            placeholder="Введите код из письма"
          />
        </div>

        <div className="mt-6 mb-20">
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={handleResetPassword}
          >
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
