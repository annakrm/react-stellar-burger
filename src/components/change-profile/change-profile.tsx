import React from "react";

import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./change-profile.module.css";

export const ChangeProfile = () => {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles.inputs_container}>
        <Input
          //onChange={onChangeName}
          //value={name}
          name="name"
          placeholder="Имя"
          isIcon={false}
          extraClass="mb-6"
        />
        <EmailInput
          //onChange={onChangeEmail}
          //value={email}
          name="email"
          placeholder="Логин"
          isIcon
          extraClass="mb-6"
        />
        <Input
          type="password"
          //onChange={onChangePass}
          //value={password}
          name="password"
          placeholder="Пароль"
          isIcon
        />

        <div className={styles.buttons_container}>
          <Button htmlType="button" type="secondary" size="medium">
            Отмена
          </Button>

          <Button htmlType="button" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </div>
      <span className="text text_type_main-default text_color_inactive mb-4"></span>
    </>
  );
};
