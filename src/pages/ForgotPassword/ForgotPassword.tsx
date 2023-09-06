import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC, FormEvent } from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { initPasswordReset } from "~/services/actions/user";
import { useAppDispatch, useAppSelector } from "~/services/hooks";

import styles from "./ForgotPassword.module.css";

export const ForgotPassword: FC = () => {
  const dispatch = useAppDispatch();

  const [emailInputValue, setEmailInputValue] = useState("");

  const navigate = useNavigate();

  const isPasswordResetRequestSuccessful = useAppSelector(
    ({ user }) => user.passwordResetRequestSuccessful
  );

  const onEmailInputValueChange = (e) => {
    setEmailInputValue(e.target.value);
  };

  const handleInitPasswordReset = (event: FormEvent) => {
    event.preventDefault();
    dispatch(initPasswordReset({ email: emailInputValue }));
  };

  useEffect(() => {
    if (isPasswordResetRequestSuccessful) {
      navigate("/reset-password", { state: { fromForgotPassword: true } });
    }
  }, [isPasswordResetRequestSuccessful]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>

        <form
          className={styles.inputWrapper}
          onSubmit={handleInitPasswordReset}
        >
          <EmailInput
            onChange={onEmailInputValueChange}
            value={emailInputValue}
            name="email"
            placeholder="Укажите e-mail"
            isIcon={false}
            extraClass="mb-6"
          />

          <Button
            extraClass="mt-6 mb-20"
            htmlType="submit"
            type="primary"
            size="large"
          >
            Восстановить
          </Button>
        </form>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль?{" "}
          <NavLink
            to="/reset-password"
            className={`${styles.link} text text_color_accent`}
          >
            Войти
          </NavLink>
        </span>
      </div>
    </>
  );
};
