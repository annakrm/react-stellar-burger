import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { initPasswordReset } from "~/services/actions/user";

import styles from "./ForgotPassword.module.css";

export const ForgotPassword: FC = () => {
  const dispatch = useDispatch();

  const [emailInputValue, setEmailInputValue] = useState("");

  const onEmailInputValueChange = (e) => {
    setEmailInputValue(e.target.value);
  };

  const handleInitPasswordReset = () => {
    dispatch(initPasswordReset({ email: emailInputValue }));
  };

  return (
    <>
      <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>

        <div className={styles.inputWrapper}>
          <EmailInput
            onChange={onEmailInputValueChange}
            value={emailInputValue}
            name="email"
            placeholder="Укажите e-mail"
            isIcon={false}
            extraClass="mb-6"
          />
        </div>

        <div className="mt-6 mb-20">
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={handleInitPasswordReset}
          >
            Восстановить
          </Button>
        </div>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль?{" "}
          <a
            href="/login"
            onClick={() => null}
            className={`${styles.link} text text_color_accent`}
          >
            Войти
          </a>
        </span>
      </div>
    </>
  );
};
