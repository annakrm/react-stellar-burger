import styles from './header-link.module.css';
import { NavLink } from 'react-router-dom';

export const HeaderLink = ({ IconComponent, text, link }) => {
        const setActiveText = ({isActive}) => {
            return isActive ? styles.headerLink_active : styles.headerLink
        }

        const setActiveIcon = ({isActive}) => {
            return isActive ? "primary" : "secondary"
        }

    return (
        <NavLink to={link} className={setActiveText} >
        <IconComponent type={setActiveIcon} />
        <span className='ml-2'>{text}</span>
        </NavLink>
    )
}

{/* 
`$
*/}

