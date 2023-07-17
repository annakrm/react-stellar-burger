import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
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
);