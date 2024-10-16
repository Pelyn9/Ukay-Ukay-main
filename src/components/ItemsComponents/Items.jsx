import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import styles from "./App.module.css";

const Items = () => {
  return (
    <div className={styles.app}>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Items;
