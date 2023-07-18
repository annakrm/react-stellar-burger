import styles from './header-link.module.css';

export const HeaderLink = ({ IconComponent, text }) => (
    <a href="/" className={styles.headerLink}>
        <IconComponent type="primary" />
        <span className="text text_type_main-default ml-2">{text}</span>
    </a>
);
