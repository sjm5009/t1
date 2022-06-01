import React from "react";

const GoodsList = ({ goods }) => {
  return (
    <>
      <li>ID : {goods.goodsId}</li>
      <li>상품명 : {goods.title}</li>
      <li>가격 : {goods.price}</li>
      <li>설명 : {goods.desc}</li>
    </>
  );
};

export default GoodsList;
