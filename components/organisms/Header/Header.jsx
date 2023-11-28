import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.wrapper}>
        <div className={styles.navWrapper}>
          <nav className={styles.headerNav}>
            <a href="#">Shop</a>
            <a href="#">Lawn Movers</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div>
          <h1 className={styles.localH1}>Lawn Shop</h1>
        </div>

        <div className={styles.logoWrapper}>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">ShoppingCart</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
