import React from "react";
import styles from "./ProductCard.module.css";
import useStore from "../store/zustandStore"; 
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ name, price }) => {
  const addToCart = useStore((state) => state.addToCart);
  const addToFavorites = useStore((state) => state.addToFavorites);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ name, price }); // Add item to cart
    navigate('/cart'); // Redirect to cart page
  };

  const handleAddToFavorites = () => {
    addToFavorites({ name, price }); // Add item to favorites
    navigate('/favorites'); // Redirect to favorites page
  };

  return (
    <article className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src="http://b.io/placeholder-image"
          alt={name}
          className={styles.productImage}
        />
        <div className={styles.iconContainer}>
          <button
            className={styles.iconButton}
            aria-label="Add to favorites"
            onClick={handleAddToFavorites}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70245941bb73899a924cb846573511ac995eda3fc8417140ae188af89f4acb34?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
              alt="Favorites"
              className={styles.icon}
            />
          </button>
          <button className={styles.iconButton} 
          aria-label="Add to cart"
          onClick={handleAddToCart}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f2492b859c1fe47f068155e6fb38d7ef642bc6ae100fee952a93185f29e0aa3?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
              alt="Cart"
              className={styles.icon}
            />
          </button>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <span className={styles.productPrice}>{price}</span>
        <button className={styles.buyButton} onClick={handleAddToCart}>
          Buy
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
