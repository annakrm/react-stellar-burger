    import React from "react";
    import styles from "./change-profile.module.css";
    import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
    
    export const ChangeProfile = () => {
        const [value, setValue] = React.useState('')
        const onChange = e => {
        setValue(e.target.value)
        }
        return (
            <>
            <div className={styles.inputs_container}>
              <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                placeholder="Имя"
                isIcon={true}
                extraClass="mb-6"
              />
                <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                placeholder="Логин"
                isIcon={true}
                extraClass="mb-6"
              />
                <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                placeholder="Пароль"
                isIcon={true}
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
            <span className="text text_type_main-default text_color_inactive mb-4">
            </span>
            </>
          )
    }