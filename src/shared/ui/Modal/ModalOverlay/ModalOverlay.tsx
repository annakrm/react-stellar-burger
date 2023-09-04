import type { FC } from "react";

import styles from "./ModalOverlay.module.css";

type Props = {
  onClose: () => void;
};

export const ModalOverlay: FC<Props> = ({ onClose }) => (
  <div className={styles.overlay} onClick={onClose} />
);
