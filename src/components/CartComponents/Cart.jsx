import React from "react";
import styles from "./Cart.module.css";
import Header from "./Header";
import EmptyCart from "./EmptyCart";
import Footer from "./Footer";
import useStore from "../store/zustandStore";

function Cart() {
  const cartItems = useStore((state) => state.cartItems);

  return (
    <main className={styles.cart}>
      <Header />
      <section className={styles.cartContent}>
        <div className={styles.cartLayout}>
          <div className={styles.imageColumn}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/561c62489c7f15fa2d276c46181026fafa1a5f799999be7269bed826c7cffdc5?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
              alt="Cart illustration"
              className={styles.cartImage}
            />
          </div>
          <div className={styles.contentColumn}>
            {cartItems.length === 0 ? (
              <EmptyCart /> // If cart is empty, show EmptyCart component
            ) : (
              <ul className={styles.cartItemList}>
                {cartItems.map((item, index) => (
                  <li key={index} className={styles.cartItem}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    {/* You can add more details like quantity or remove button */}
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

export default Cart;
