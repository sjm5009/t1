import React from "react";
import style from "./header.module.css";

const Header = (props) => {
  return (
    <div>
      <header>
        <div class={style.section}>
          <img
            src="https://media.graphcms.com/iiMXVGjRRh6lhUc8Zmfy"
            alt="t1_logo"
            class={style.logo}
          />
          <ul class={style.menuList}>
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
          <div class={style.cartSection}>
            <img
              src="../img/cart/cart-solid.png"
              alt="cart"
              class={style.cart}
            />
            <span>Cart</span>
            <span class={style.count}>0</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
