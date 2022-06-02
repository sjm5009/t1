import React, { useState, useEffect } from "react";
import GoodsAddForm from "../goods_add_form/GoodsAddForm";
import GoodsList from "../goods_list/goods_list";
import styles from "./goods.module.css";

const Goods = ({ dbService, imageService }) => {
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
      console.log(goodsInfo);
      setGoods(goodsInfo);
    });
  }, [dbService]);

  return (
    <div className={styles.wrap}>
      {/* <GoodsAddForm
        dbService={dbService}
        imageService={imageService}
        saveGoods={saveGoods}
      /> */}

      <ul className={styles.container}>
        {Object.keys(goods).map((key) => (
          <GoodsList goods={goods[key]} />
        ))}
      </ul>
    </div>
  );
};

export default Goods;