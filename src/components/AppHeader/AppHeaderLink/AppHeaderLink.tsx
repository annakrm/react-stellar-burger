import { BurgerIcon as UIKitIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./AppHeaderLink.module.css";

type Props = {
  IconComponent: typeof UIKitIcon;
  text: string;
  link: string;
};

export const AppHeaderLink: FC<Props> = ({ IconComponent, text, link }) => {
  const setActiveText = ({ isActive }) => {
    return isActive ? styles.headerLinkActive : styles.headerLink;
  };

  return (
    <NavLink
      to={link}
      className={setActiveText}
      // eslint-disable-next-line react/no-children-prop
      children={({ isActive }) => (
        <>
          <IconComponent type={isActive ? "primary" : "secondary"} />
          <span className="ml-2">{text}</span>
        </>
      )}
    />
  );
};
