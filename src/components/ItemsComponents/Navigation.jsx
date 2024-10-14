import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navigation}>
      <Link to="/home" className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}>
        Home
      </Link>
      <div className={styles.navItemWrapper}>
        <Link to="/items" className={`${styles.navLink} ${location.pathname === '/items' ? styles.active : ''}`}>
          Items
        </Link>
        <div className={styles.underline} />
      </div>
      <Link to="/favorites" className={`${styles.navLink} ${location.pathname === '/favorites' ? styles.active : ''}`}>
        Favorites
      </Link>
      <button className={styles.iconButton} aria-label="Notifications">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0184b8cae3527568127b7e97a0144a16299b34746c0072e4f70631560363ead8?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
          alt=""
          className={styles.icon}
        />
      </button>
      <button className={styles.iconButton} aria-label="User Profile">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b067702305adfd602a0b6f1791cdcc451ae43eb4211b5b1a467b0d4a74d7784?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
          alt=""
          className={styles.icon}
        />
      </button>
    </nav>
  );
};

export default Navigation;
