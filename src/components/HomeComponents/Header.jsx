import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
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
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/items" className={styles.navLink}>Items</Link>  {/* Navigate to Items */}
          </li>
          <li className={styles.navItem}>
            <Link to="/favorites" className={styles.navLink}>Favorites</Link>  {/* Navigate to Favorites */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
