import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { ChangeEvent, FC, FormEvent } from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { resetPassword } from "~/services/actions/user";

import styles from "./ResetPassword.module.css";

export const ResetPassword: FC = () => {
  const dispatch = useDispatch();

  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [codeInputValue, setCodeInputValue] = useState("");
  const [isPageInited, setIsPageInited] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isFromForgotPasswordPath = location?.state?.fromForgotPassword;

    if (isFromForgotPasswordPath) {
      setIsPageInited(true);
    } else {
      navigate(-1);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleCodeInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCodeInputValue(event.target.value);
  };

  const handleResetPassword = (event: FormEvent) => {
    event.preventDefault();

    const requestData = {
      password: passwordInputValue,
      token: codeInputValue,
    };

    dispatch(resetPassword(requestData));
  };

  return isPageInited ? (
    <>
      <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h1>

        <form className={styles.inputWrapper} onSubmit={handleResetPassword}>
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

          <Button
            extraClass="mt-6 mb-20"
            htmlType="submit"
            type="primary"
            size="large"
          >
            Сохранить
          </Button>
        </form>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль?{" "}
          <NavLink to="/" className={`${styles.link} text text_color_accent`}>
            Войти
          </NavLink>
        </span>
      </div>
    </>
  ) : null;
};
