import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { ChangeEvent, FC, FormEvent } from "react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/services/hooks";
import { RootState } from "~/services/types";

import { login } from "../../services/actions";

import styles from "./Login.module.css";

export const Login: FC = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isUserLoginSuccessful = useAppSelector(
    ({ user }: RootState) => user.loginSuccessful
  );

  const navigate = useNavigate();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isUserLoginSuccessful) {
      navigate("/");
    }
  }, [isUserLoginSuccessful]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">Вход</h1>

        <form className={styles.inputWrapper} onSubmit={handleLogin}>
          <EmailInput
            value={email}
            name="email"
            placeholder="E-mail"
            isIcon={false}
            extraClass="mb-6"
            onChange={onChangeEmail}
          />
          <Input
            type="password"
            onChange={onChangePass}
            value={password}
            name="password"
            placeholder="Пароль"
          />

          <Button
            extraClass="mt-6 mb-20"
            htmlType="submit"
            type="primary"
            size="large"
          >
            Войти
          </Button>
        </form>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Вы - новый пользователь?{" "}
          <NavLink
            to="/register"
            className={`${styles.link} text text_color_accent`}
          >
            Зарегистрироваться
          </NavLink>
        </span>

        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <NavLink
            to="/forgot-password"
            className={`${styles.link} text text_color_accent`}
          >
            Восстановить пароль
          </NavLink>
        </span>
      </div>
    </>
  );
};
