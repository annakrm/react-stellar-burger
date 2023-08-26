import { useState } from "react";

import { NavLink } from "react-router-dom";

import styles from "./header-link.module.css";

export const HeaderLink = ({ IconComponent, text, link }) => {
  const [iconType, setIconType] = useState("secondary");

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
