import React from "react";
import Header from "./Header/Header";
import ProductList from "./ProductList/ProductList";
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
