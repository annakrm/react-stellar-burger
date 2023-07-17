import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { ModalOverlay } from '../modal-overlay';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const closeByEsc = (evt, onClose) => {
    if (evt.key === 'Escape') {
        onClose();
    }
};

export const Modal = ({ children, onClose }) => {
    const handleCloseModal = (evt) => closeByEsc(evt, onClose);

    useEffect(() => {
        document.addEventListener('keydown', handleCloseModal);

        return () => document.removeEventListener('keydown', handleCloseModal);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return createPortal(
        (
            <>
                <div className={styles.modal}>
                    <div className={styles.closeButton}>
                        <CloseIcon type="primary" onClick={onClose}/>
                    </div>
                    {children}  
                </div>
                <ModalOverlay onClose={onClose} />
            </>
        ),
        document.body
    );
};


/*import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';

export const Modal = ({ children, onClose }) => (
    <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
            {children}
            <div className={styles.closeButton} onClick={onClose}>
                <CloseIcon />
            </div>
        </div>
    </div>
); */