import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "../admin/header/admin_header";
import GoodsAddForm from "../goods_add_form/goods_add_form";
import GoodsList from "../goods_list/goods_list";
import styles from "./goods.module.css";

const Goods = ({ dbService, imageService, setUserInfo }) => {
  const location = useLocation().state;
  const [goods, setGoods] = useState({});

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
    console.log(location);
    if (location) setUserInfo(location.user);
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.divwrap}>
          <ul className={styles.container}>
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
