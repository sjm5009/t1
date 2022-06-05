import React, { useRef, useState, useEffect } from "react";
import styles from "./imageButton.module.css";

const ImageButton = ({ imageService, name, uploadImage, size }) => {
  const fileRef = useRef();
  const [loading, setLoading] = useState(false);

  const onButtonClick = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };

  const onInputChange = async (event) => {
    setLoading(true);
    console.log(event.target.files[0]);
    const files = document.querySelector("[type=file]").files;
    let file = await imageService.upload(files);
    console.log(file);
    uploadImage(file);
    setLoading(false);
  };

  const getButtonSize = () => {
    switch (size) {
      case "10":
        return styles.size_10;

      case "8":
        return styles.size_8;

      case "6":
        return styles.size_6;

      default:
        return styles.size_10;
    }
  };

  const buttonSize = getButtonSize();

  return (
    <div>
      <ul className={`${buttonSize} ${styles.margin_auto}`}>
        {!loading && (
          <li>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className={styles.input}
              onChange={onInputChange}
            />
            <button
              type="button"
              className={styles.button}
              onClick={onButtonClick}
              name="imgButton"
            >
              {name}
            </button>
          </li>
        )}
        {loading && (
          <li>
            <button className={styles.loading_section}>
              <div className={styles.loading}></div>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ImageButton;
