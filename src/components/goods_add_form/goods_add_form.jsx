import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../admin/header/admin_header";
import ImageButton from "../button/ImageButton";
import styles from "./goods_add_form.module.css";

const GoodsAddForm = ({ dbService, imageService }) => {
  const navigation = useNavigate();

  let titleRef = useRef();
  let priceRef = useRef();
  let cateRef = useRef();
  let descRef = useRef();
  let formRef = useRef();
  let [file, setFile] = useState({
    filePublicId: null,
    fileUrl: null,
    fileNmae: null,
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (cateRef.current.value === "NONE")
      return alert("카테고리를 선택하세요.");

    const tempGoods = {
      goodsId: Date.now(),
      title: titleRef.current.value || "",
      price: priceRef.current.value || "",
      category: cateRef.current.value || "",
      desc: descRef.current.value || "",
      filePublicId: file.filePublicId || "",
      fileUrl: file.fileUrl || "",
      fileName: file.fileName || "",
    };

    await dbService.saveGoodsList(tempGoods);
    await dbService.saveGoodsCateList(tempGoods);
    navigation("/list", { state: { goods: tempGoods } });
  };

  const uploadImage = (fileInfo) => {
    const file = {
      filePublicId: fileInfo.filePublicId,
      fileUrl: fileInfo.fileUrl,
      fileName: fileInfo.fileName,
    };
    setFile(file);
  };

  return (
    <>
      <div className={styles.wrap}>
        <section className={styles.section}>
          <form onSubmit={onSubmit} ref={formRef}>
            <input
              ref={titleRef}
              type="text"
              name="title"
              placeholder="상품명"
            />
            <input ref={priceRef} type="text" name="price" placeholder="가격" />
            <select ref={cateRef} name="category">
              <option value="NONE">카테고리 선택</option>
              <option value="APPAREL">APPAREL</option>
              <option value="ACCESSORIES">ACCESSORIES</option>
              <option value="COLLECTIBLES">COLLECTIBLES</option>
              <option value="COLLABORATION">COLLABORATION</option>
            </select>
            <textarea
              ref={descRef}
              type="text"
              name="desc"
              placeholder="상품 상세 설명"
              rows="6"
            />

            <div id="upload_section" className={styles.buttonArea}>
              <ImageButton
                imageService={imageService}
                name={file.fileName || "파일 선택"}
                uploadImage={uploadImage}
                size="8"
              />
              <button onClick={onSubmit} className={styles.button}>
                저장
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default GoodsAddForm;
