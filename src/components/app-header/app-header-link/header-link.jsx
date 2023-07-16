import styles from './header-link.module.css';

export const HeaderLink = ({ icon, text }) => (
    <a href="/" className={`${styles.headerLink} text text_type_main-default ml-2`}>{icon}{text}</a>
);
