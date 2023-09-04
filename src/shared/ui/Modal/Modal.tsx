import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import { closeByEsc } from "../../lib/closeByEsc";

import styles from "./Modal.module.css";
import { ModalOverlay } from "./ModalOverlay";

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
