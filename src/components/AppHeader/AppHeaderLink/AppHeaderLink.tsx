import { BurgerIcon as UIKitIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./AppHeaderLink.module.css";

type IconType = "secondary" | "primary" | "error" | "success";

type Props = {
  IconComponent: typeof UIKitIcon;
  text: string;
  link: string;
};

export const AppHeaderLink: FC<Props> = ({ IconComponent, text, link }) => {
  const [iconType, setIconType] = useState<IconType>();

  const setActiveText = ({ isActive }) => {
    setIconType(isActive ? "primary" : "secondary");

    return isActive ? styles.headerLink_active : styles.headerLink;
  };

  return (
    <NavLink to={link} className={setActiveText}>
      <IconComponent type={iconType} />
      <span className="ml-2">{text}</span>
    </NavLink>
  );
};
