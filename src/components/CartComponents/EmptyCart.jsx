import React from "react";
import { Link } from "react-router-dom"; // Import Link
import styles from "./EmptyCart.module.css";
import useStore from "../store/zustandStore"; 

function EmptyCart() {
  const cartItems = useStore((state) => state.cartItems); 

  return (
    <section className={styles.emptyCart}>
      {cartItems.length === 0 ? (
        <>
          <h2 className={styles.title}>Your Cart feels empty.</h2>
          <p className={styles.description}>
            Your Shopping cart lives to serve.
            <br />
            Fill it with clothes and make it happy!
          </p>
          <Link to="/items" className={styles.continueButton}> {/* Use Link here */}
            Continue Shopping
          </Link>
        </>
      ) : (
        <>
          <h2 className={styles.title}>Your Cart Items:</h2>
          <ul className={styles.itemList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.item}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default EmptyCart;
