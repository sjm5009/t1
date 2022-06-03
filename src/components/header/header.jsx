import React from "react";
import style from "./header.module.css";

const Header = (props) => {
  return (
    <div>
      <header>
        <div className={style.section}>
          <img
            src="https://media.graphcms.com/iiMXVGjRRh6lhUc8Zmfy"
            alt="t1_logo"
            className={style.logo}
          />
          <ul className={style.menuList}>
            <li>
              <a href="#">APPAREL</a>
            </li>
            <li>
              <a href="#">ACCESSORIES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">COLLABORATION</a>
            </li>
          </ul>
          <div className={style.cartSection}>
            <img
              src="img/cart/cart-solid.png"
              alt="cart"
              className={style.cart}
            />
            <span>Cart</span>
            <span className={style.count}>0</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
