import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../services/actions";

import styles from "./Login.module.css";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const onChangePass = (evt) => {
    setPassword(evt.target.value);
  };

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <>
      <div className={styles.login}>
        <h1 className="text text_type_main-medium mb-6">Вход</h1>

        <div className={styles.inputWrapper}>
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
        </div>

        <div className="mt-6 mb-20">
          <Button
            onClick={handleLogin}
            htmlType="button"
            type="primary"
            size="large"
          >
            Войти
          </Button>
        </div>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Вы - новый пользователь?{" "}
          <a
            href="/register"
            className={`${styles.link} text text_color_accent`}
          >
            Зарегистрироваться
          </a>
        </span>

        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <a
            href="/forgot-password"
            className={`${styles.link} text text_color_accent`}
          >
            Восстановить пароль
          </a>
        </span>
      </div>
    </>
  );
};
