import React, { useState, useRef } from "react";
import ImageButton from "../button/imageButton";
import style from "./goodsAddForm.module.css";

const GoodsAddForm = ({ dbService, imageService, saveGoods }) => {
  let titleRef = useRef();
  let priceRef = useRef();
  let descRef = useRef();
  let formRef = useRef();
  let [file, setFile] = useState({ filePublicId: null, fileUrl: null });

  const onSubmit = async (e) => {
    e.preventDefault();
    const tempGoods = {
      goodsId: Date.now(),
      title: titleRef.current.value || "",
      price: priceRef.current.value || "",
      desc: descRef.current.value || "",
      filePublicId: file.filePublicId || "",
      fileUrl: file.fileUrl || "",
    };

    await dbService.saveGoodsInfo();
    saveGoods(tempGoods);
  };

  const uploadImage = (fileInfo) => {
    const file = {
      filePublicId: fileInfo.filePublicId,
      fileUrl: fileInfo.fileUrl,
    };
    setFile(file);
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input ref={titleRef} type="text" name="title" />
      <input ref={priceRef} type="text" name="price" />
      <input ref={descRef} type="text" name="desc" />

      <div id="upload_section">
        <button onClick={onSubmit}>저장!!</button>
        <ImageButton
          imageService={imageService}
          name="Pink Button"
          uploadImage={uploadImage}
        />
      </div>
    </form>
  );
};

export default GoodsAddForm;
