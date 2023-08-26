import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { registration } from "../../services/actions";

import styles from "./registration.module.css";

export const RegistrationPage = () => {
  // const [value, setValue] = useState("");

  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const onChangePass = (evt) => {
    setPassword(evt.target.value);
  };

  const onChangeName = (evt) => {
    setName(evt.target.value);
  };

  const onClick = () => {
    dispatch(registration(email, password, name));
  };

  return (
    <>
      <div className={styles.registration}>
        <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
        <div className={styles.inputWrapper}>
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
        </div>

        <div className="mt-6 mb-20">
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={onClick}
          >
            Зарегистрироваться
          </Button>
        </div>

        <span className="text text_type_main-default text_color_inactive mb-4">
          Уже зарегистрированы?{" "}
          <a href="/login" className={`${styles.link} text text_color_accent`}>
            Войти
          </a>
        </span>
      </div>
    </>
  );
};
