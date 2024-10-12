import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6d0a7a6f1e9238ee939c4890c892dfaf179c0c3228dd98cc1712dad2439eb75?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
        alt="Ukay-Ukay Online Shop Logo"
        className={styles.logo}
      />
      <nav className={styles.navigation}>
      <a href="/home" className={styles.navLink}>
        Home
      </a>
      <div className={styles.navItemWrapper}>
        <a href="/items" className={styles.navLink}>
          Items
        </a>
        <div className={styles.underline} />
      </div>
      <a href="/favorites" className={styles.navLink}>
        Favorites
      </a>
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
    </header>
  );
};

export default Header;
