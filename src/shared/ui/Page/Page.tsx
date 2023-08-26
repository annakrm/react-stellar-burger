import { FC } from "react";

import styles from "./page.module.css";

type Props = {
  columnContentAlignment?: boolean;
  contentClassNames?: boolean;
};

export const Page: FC<Props> = ({
  columnContentAlignment,
  children,
  contentClassNames = "",
}) => {
  const targetContentClassNames = `${contentClassNames} ${styles.content} ${
    columnContentAlignment ? styles.contentColumnAligned : ""
  }`;

  return (
    <div className={styles.wrapper}>
      <div className={targetContentClassNames}>{children}</div>
    </div>
  );
};
