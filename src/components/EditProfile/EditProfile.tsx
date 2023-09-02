import {
  Button,
  EmailInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC, ChangeEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "~/services/actions/user";

import { RootState } from "../../services/types";

import styles from "./EditProfile.module.css";

export const EditProfile: FC = () => {
  const dispatch = useDispatch();

  const { name, email } = useSelector(({ user }: RootState) => user.userData);

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

  const handleUpdateUser = () => {
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
      <div className={styles.wrapper}>
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
              <Button
                htmlType="button"
                type="primary"
                size="medium"
                onClick={handleUpdateUser}
              >
                Сохранить
              </Button>
            </div>
          </>
        ) : (
          <div />
        )}
      </div>

      <span className="text text_type_main-default text_color_inactive mb-4" />
    </>
  );
};
