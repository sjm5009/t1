import React from "react";
import { Route } from "react-router-dom";
import styles from "./goods_list.module.css";

const GoodsList = ({ goodsId, goods, openPopup }) => {
  const onGoodsPopup = (e) => {
    openPopup(e.currentTarget.id, true);
  };

  return (
    <>
      <li className={styles.li}>
        <a id={`${goodsId}_${goods.category}`} onClick={onGoodsPopup}>
          <div className={styles.container}>
            <img src={goods.fileUrl} alt="" />
            <div className={styles.content}>
              <p>{goods.title}</p>
              <p>{goods.price}</p>
              <p>{goods.desc}</p>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default GoodsList;
