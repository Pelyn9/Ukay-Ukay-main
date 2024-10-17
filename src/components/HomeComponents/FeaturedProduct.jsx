import React, { useState } from "react";
import styles from "./FeaturedProduct.module.css";
import useStore from "../store/zustandStore"; // Adjust the import path as necessary

const FeaturedProduct = ({ name, description, date }) => {
  const [quantity, setQuantity] = useState(0);
  
  // Access the Zustand store functions
  const addToCart = useStore((state) => state.addToCart);
  const addToFavorites = useStore((state) => state.addToFavorites);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(0, prev - 1));

  const handleCartClick = () => {
    console.log("Cart button clicked");
    if (quantity > 0) {
      addToCart({ name, description, date, quantity }); // Add the item with quantity to the cart
      alert(`Added ${quantity} ${name}(s) to the cart.`);
    } else {
      alert("Please select a quantity before adding to cart.");
    }
  };

  const handleFavoritesClick = () => {
    console.log("Favorites button clicked");
    addToFavorites({ name, description, date }); // Add the item to favorites
    alert(`${name} added to favorites.`);
  };

  return (
    <section className={styles.featuredProduct}>
      <div className={styles.productImage}></div>
      <div className={styles.productDetails}>
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.productDate}>{date}</p>
        <p className={styles.productDescription}>{description}</p>
        <div className={styles.quantityControl}>
          <button onClick={incrementQuantity} className={styles.quantityButton}>
            +
          </button>
          <button onClick={decrementQuantity} className={styles.quantityButton}>
            -
          </button>
        </div>
        <div className={styles.quantityDisplay}>{quantity}</div>
        <div className={styles.actionButtons}>
          <button onClick={handleCartClick} className={styles.buyButton}>
            Buy
          </button>

          {/* Cart Button */}
          <button onClick={handleCartClick} className={styles.actionIconButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf3108e8fc4cf36951d87816e360aad56e4bc090bfaf17d95bc6bef752ad2267?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
              alt="Cart"
              className={styles.actionIcon}
            />
          </button>

          {/* Favorites Button */}
          <button onClick={handleFavoritesClick} className={styles.actionIconButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/88df987f1cb46a0ecae13f7603ffb6312c413e5e6867aba5e10b877393ae02f5?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
              alt="Favorites"
              className={styles.actionIcon}
            />
          </button>
        </div>
      </div>
      <aside className={styles.additionalImages}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c640ff0becb6e3b52bd906034504bca5e73b9654acf9077596da294497529d32?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
          alt="Additional product view 1"
          className={styles.thumbnailImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e07868fd5393434019dc5ca040f307c54d01ccc40ba74abe5df19de222bf3c3?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
          alt="Additional product view 2"
          className={styles.thumbnailImage}
        />
      </aside>
    </section>
  );
};

export default FeaturedProduct;
