import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";

import styles from "./ChangeProfile.module.css";

export const ChangeProfile: FC = () => {
  return (
    <>
      <div className={styles.inputsWrapper}>
        <Input
          onChange={() => null}
          value=""
          name="name"
          placeholder="Имя"
          extraClass="mb-6"
        />
        <EmailInput
          onChange={() => null}
          value=""
          name="email"
          placeholder="Логин"
          isIcon
          extraClass="mb-6"
        />
        <Input
          type="password"
          onChange={() => null}
          value=""
          name="password"
          placeholder="Пароль"
        />

        <div className={styles.buttonsWrapper}>
          <Button htmlType="button" type="secondary" size="medium">
            Отмена
          </Button>
          <Button htmlType="button" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </div>

      <span className="text text_type_main-default text_color_inactive mb-4" />
    </>
  );
};
