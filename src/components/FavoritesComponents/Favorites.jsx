import React from "react";
import styles from "./Favorites.module.css"; // Adjust the path as needed
import Header from "./Header";
import EmptyCart from "./EmptyCart"; // This can be renamed to something like "EmptyFavorites" if needed
import Footer from "./Footer";
import useStore from "../store/zustandStore"; // Import Zustand store

function Favorites() {
  const favoriteItems = useStore((state) => state.favoriteItems);

  return (
    <main className={styles.favorites}>
      <Header />
      <section className={styles.favoritesContent}>
        <div className={styles.favoritesLayout}>
          <div className={styles.imageColumn}>
            {/* Optional: Add an illustration or empty state image */}
          </div>
          <div className={styles.contentColumn}>
            {favoriteItems.length === 0 ? (
              <EmptyCart /> // Display EmptyCart component when there are no favorite items
            ) : (
              <ul className={styles.favoritesItemList}>
                {favoriteItems.map((item, index) => (
                  <li key={index} className={styles.favoriteItem}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    {/* Add more details like a button to remove from favorites */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Favorites;
