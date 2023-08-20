import styles from "./page.module.css";

export const Page = ({
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
