import React from "react";
import { Route } from "react-router-dom";
import styles from "./goods_list.module.css";

const GoodsList = ({ goods }) => {
  return (
    <>
      <li>
        <a>
          <div className={styles.container}>
            <img src={goods.fileUrl} alt="" />
            <div className={styles.content}>
              <p>상품명 {goods.title}</p>
              <p>가격 {goods.price}</p>
              <p>{goods.desc}</p>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default GoodsList;
