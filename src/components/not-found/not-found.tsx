import React from "react";

import styles from "./not-found.module.css";

export const NotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <p className="text text_type_main-medium text_color_primary">
          Мы очень старались, но ничего не нашли!
        </p>
        <p className="text text_type_main-medium text_color_primary">404 ❤️</p>
      </div>
    </>
  );
};
