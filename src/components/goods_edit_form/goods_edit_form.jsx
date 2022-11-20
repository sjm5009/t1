import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./goods_edit_form.module.css";
import CloseButton from "../button/closeButton";
import ImageButton from "../button/ImageButton";

const GoodsEditForm = ({ imageService, goodsId, goodsDtl, closePopup, updateGoods, saveGoodsDetail }) => {
  const location = useLocation();

  const { title, price, category, desc, filePubliId, fileUrl, fileName } = goodsDtl;
  let titleRef = useRef();
  let priceRef = useRef();
  let cateRef = useRef();
  let descRef = useRef();
  let [file, setFile] = useState({});
  let prevGoodsDlt = goodsDtl;

  const uploadImage = (fileInfo) => {
    const file = {
      filePublicId: fileInfo.filePublicId,
      fileUrl: fileInfo.fileUrl,
      fileName: fileInfo.fileName,
    };
    setFile(file);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    saveGoodsDetail({ ...goodsDtl, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (cateRef.current.value === "NONE") return alert("카테고리를 선택하세요");

    const tempGoods = {
      goodsId: goodsDtl.goodsId,
      title: titleRef.current.value || "",
      price: priceRef.current.value || "",
      category: cateRef.current.value || "",
      desc: descRef.current.value || "",
      filePublicId: file.filePublicId || goodsDtl.filePublicId,
      fileUrl: file.fileUrl || goodsDtl.fileUrl,
      fileName: file.fileName || goodsDtl.fileName,
      writer: location.state.user.uid || "",
    };
    updateGoods(tempGoods, prevGoodsDlt);
  };

  useEffect(() => {
    setFile({
      filePubliId: goodsDtl.filePubliId,
      fileUrl: goodsDtl.fileUrl,
      fileName: goodsDtl.fileName,
    });
  }, [filePubliId, fileUrl, fileName]);

  return (
    <>
      <div id={goodsId} className={styles.popup_active}>
        <CloseButton color="red" size="medium" name="닫기" closePopup={closePopup} />
        <form className={styles.modal}>
          <div className={styles.item}>
            <label className={styles.label} for="">
              상품명
            </label>
            <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange} />
          </div>
          <div className={styles.item}>
            <label className={styles.label} for="">
              가격
            </label>
            <input ref={priceRef} className={styles.input} type="text" name="price" value={price} onChange={onChange} />
          </div>
          <div className={styles.item}>
            <label className={styles.label} for="">
              카테고리
            </label>
            <select ref={cateRef} className={styles.select} name="category" value={category} onChange={onChange}>
              <option value="NONE">카테고리 선택</option>
              <option value="APPAREL">APPAREL</option>
              <option value="ACCESSORIES">ACCESSORIES</option>
              <option value="COLLECTIBLES">COLLECTIBLES</option>
              <option value="COLLABORATION">COLLABORATION</option>
            </select>
          </div>
          <div className={`${styles.item} ${styles.file_item}`}>
            <ImageButton imageService={imageService} uploadImage={uploadImage} name={file.fileName || fileName} />
          </div>
          <div className={styles.item}>
            <label className={styles.label} for="">
              상품 설명
            </label>
            <textarea
              ref={descRef}
              name="desc"
              className={styles.textarea}
              cols="80"
              rows="5"
              value={desc}
              onChange={onChange}
            ></textarea>
          </div>
          <button onClick={onSubmit} className={styles.button}>
            저장
          </button>
        </form>
      </div>
    </>
  );
};

export default GoodsEditForm;
