import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC, ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { updateUser } from "~/services/actions/user";
import { useAppDispatch, useAppSelector } from "~/services/hooks";

import { RootState } from "../../services/types";

import styles from "./EditProfile.module.css";

export const EditProfile: FC = () => {
  const dispatch = useAppDispatch();

  const { name, email } = useAppSelector(
    ({ user }: RootState) => user.userData
  );

  const [nameInputValue, setNameInputValue] = useState(name);
  const [emailInputValue, setEmailInputValue] = useState(email);
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const [isActionButtonsVisible, setIsActionButtonsVisible] = useState(false);

  const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(event.target.value);

    if (!isActionButtonsVisible) {
      setIsActionButtonsVisible(true);
    }
  };

  const handleEmailInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailInputValue(event.target.value);

    if (!isActionButtonsVisible) {
      setIsActionButtonsVisible(true);
    }
  };

  const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);

    if (!isActionButtonsVisible) {
      setIsActionButtonsVisible(true);
    }
  };

  const handleUpdateUser = (event: FormEvent) => {
    event.preventDefault();

    const requestData = {
      name: nameInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    };

    dispatch(updateUser(requestData));

    setIsActionButtonsVisible(false);
  };

  const handleCancelEditing = () => {
    setNameInputValue(name);
    setEmailInputValue(email);
    setPasswordInputValue("");

    setIsActionButtonsVisible(false);
  };

  return (
    <>
      <form className={styles.wrapper} onSubmit={handleUpdateUser}>
        <Input
          onChange={handleNameInputChange}
          value={nameInputValue}
          name="name"
          placeholder="Имя"
          extraClass="mb-6"
        />
        <EmailInput
          onChange={handleEmailInputChange}
          value={emailInputValue}
          name="email"
          placeholder="Email"
          isIcon
          extraClass="mb-6"
        />
        <Input
          type="password"
          onChange={handlePasswordInputChange}
          value={passwordInputValue}
          name="password"
          placeholder="Пароль"
        />

        {isActionButtonsVisible ? (
          <>
            <div className={styles.buttonsWrapper}>
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                onClick={handleCancelEditing}
              >
                Отмена
              </Button>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          </>
        ) : (
          <div />
        )}
      </form>

      <span className="text text_type_main-default text_color_inactive mb-4" />
    </>
  );
};
