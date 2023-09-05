import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { ChangeEvent, FC, FormEvent } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { register } from "../../services/actions";

import styles from "./Registration.module.css";

export const Registration: FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRegister = (event: FormEvent) => {
    event.preventDefault();
    dispatch(register({ email, password, name }));
  };

  return (
    <>
      <div className={styles.registration}>
        <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
        <form className={styles.inputWrapper} onSubmit={handleRegister}>
          <Input
            onChange={onChangeName}
            value={name}
            name="name"
            placeholder="Имя"
            extraClass="mb-6"
          />
          <EmailInput
            onChange={onChangeEmail}
            value={email}
            name="email"
            placeholder="E-mail"
            isIcon={false}
            extraClass="mb-6"
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
            Зарегистрироваться
          </Button>
        </form>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Уже зарегистрированы?{" "}
          <NavLink
            to="/login"
            className={`${styles.link} text text_color_accent`}
          >
            Войти
          </NavLink>
        </span>
      </div>
    </>
  );
};
