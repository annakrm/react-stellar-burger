import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { createPortal } from "react-dom";
import { useEffect } from "react";

import { ModalOverlay } from "../modal-overlay";

import styles from "./modal.module.css";

const closeByEsc = (evt, onClose) => {
  if (evt.key === "Escape") {
    onClose();
  }
};

export const Modal = ({ children, onClose }) => {
  const handleCloseModal = (evt) => closeByEsc(evt, onClose);

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
