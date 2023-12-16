import styles from './styles.module.css';

import Logo from './img/logo.svg';

import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.root}>
            <Link to="/" className={styles.logo}>
                <img src={Logo} alt="logo"/>
            </Link>
            <Link to="/restaurants" className={styles.link}>
                Restaurants
            </Link>
            <Link to="/cart" className={styles.link}>
                Cart
            </Link>
            <Link to="/dishes" className={styles.link}>
                Dishes
            </Link>
        </header>
    );
};
