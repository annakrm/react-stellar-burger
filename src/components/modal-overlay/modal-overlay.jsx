import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ onClose }) => (
    <div className={styles.overlay} onClick={onClose} />
);