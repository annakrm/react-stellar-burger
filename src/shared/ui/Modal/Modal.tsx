import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import type { FC } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { closeByEsc } from "../../lib/closeByEsc";

import styles from "./Modal.module.css";
import { ModalOverlay } from "./ModalOverlay";

type Props = {
  onClose: () => void;
};

export const Modal: FC<Props> = ({ children, onClose }) => {
  const handleCloseModal = (event: KeyboardEvent) => closeByEsc(event, onClose);

  const modalsContainerElement = document.getElementById("modals");

  useEffect(() => {
    document.addEventListener("keydown", handleCloseModal);

    return () => document.removeEventListener("keydown", handleCloseModal);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return createPortal(
    <>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.closeButton}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalsContainerElement
  );
};
