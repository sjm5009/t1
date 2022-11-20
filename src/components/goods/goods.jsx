import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AdminHeader from "../admin/header/admin_header";
import GoodsAddForm from "../goods_add_form/goods_add_form";
import GoodsEditForm from "../goods_edit_form/goods_edit_form";
import GoodsList from "../goods_list/goods_list";
import styles from "./goods.module.css";

const Goods = ({ dbService, imageService /* , setUserInfo */ }) => {
  const location = useLocation().state;
  const [goods, setGoods] = useState({});
  const [goodsWrapStyle, setGoodsWrapStyle] = useState(null);
  const [isPopup, setIsPopup] = useState(false);
  const [popupGoodsId, setPopupGoodsId] = useState(null);
  const [goodsDtl, setGoodsDtl] = useState({});

  const saveGoods = (goodsInfo) => {
    setGoods(() => {
      let updated = { ...goods };
      updated[goodsInfo.goodsId] = goodsInfo;
      return updated;
    });
  };

  const updateGoods = (goodsInfo, prevGoodsInfo) => {
    setGoods(() => {
      let updated = { ...goods };
      updated[goodsInfo.goodsId] = goodsInfo;
      return updated;
    });
    dbService.updateDetailGoods(prevGoodsInfo);
    dbService.saveGoodsList(goodsInfo);
    dbService.saveGoodsCateList(goodsInfo);
  };
  const openPopup = (id, popupYn) => {
    setPopupGoodsId(id);
    setIsPopup(popupYn);
  };

  const closePopup = (flag) => {
    let isPopup = flag == true ? false : true;
    setIsPopup(isPopup);
  };

  const getGoodsDetail = () => {
    let goodsId = popupGoodsId.split("_")[0];
    let goodsCate = popupGoodsId.split("_")[1];
    dbService.getDetailGoods(goodsId, goodsCate, saveGoodsDetail);
  };
  const saveGoodsDetail = (result) => {
    setGoodsDtl(result);
  };

  useEffect(() => {
    dbService.readGoods((goodsInfo) => {
      setGoods(goodsInfo);
    });
  }, [dbService]);

  useEffect(() => {
    let goods_wrap_length = Object.keys(goods).length;
    setGoodsWrapStyle(goods_wrap_length > 3 ? styles.scroll : styles.none_scroll);
  }, [goods]);

  useEffect(() => {
    if (isPopup) {
      getGoodsDetail();
    }
  }, [dbService, isPopup, popupGoodsId]);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.divwrap}>
          <ul name="goods_wrap" className={`${styles.container} ${goodsWrapStyle}`}>
            {!goods ||
              Object.keys(goods).map((key) => <GoodsList goodsId={key} goods={goods[key]} openPopup={openPopup} />)}
          </ul>
        </div>
      </div>
      {isPopup && (
        <GoodsEditForm
          imageService={imageService}
          goodsId={popupGoodsId}
          goodsDtl={goodsDtl}
          closePopup={closePopup}
          updateGoods={updateGoods}
          saveGoodsDetail={saveGoodsDetail}
        />
      )}
    </>
  );
};

export default Goods;
