import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "../admin/header/admin_header";
import GoodsAddForm from "../goods_add_form/goods_add_form";
import GoodsList from "../goods_list/goods_list";
import styles from "./goods.module.css";

const Goods = ({ dbService, imageService /* , setUserInfo */ }) => {
  const location = useLocation().state;
  const [goods, setGoods] = useState({});
  const [goodsWrapStyle, setGoodsWrapStyle] = useState(null);

  const saveGoods = (goodsInfo) => {
    setGoods(() => {
      let updated = { ...goods };
      updated[goodsInfo.goodsId] = goodsInfo;
      return updated;
    });
  };

  useEffect(() => {
    dbService.readGoods((goodsInfo) => {
      setGoods(goodsInfo);
    });
  }, [dbService]);

  useEffect(() => {
    console.log(Object.keys(goods).length);
    let goods_wrap_length = Object.keys(goods).length;
    setGoodsWrapStyle(
      goods_wrap_length > 3 ? styles.scroll : styles.none_scroll
    );
  }, [goods]);
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.divwrap}>
          <ul
            name="goods_wrap"
            className={`${styles.container} ${goodsWrapStyle}`}
          >
            {!goods ||
              Object.keys(goods).map((key) => (
                <GoodsList key={key} goods={goods[key]} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Goods;
