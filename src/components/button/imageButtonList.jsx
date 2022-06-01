import React from "react";
import styles from "./imageButton.module.css";

const ImageButtonList = ({ key, name }) => {
  const fileName = `file${key}`;
  return (
    <div>
      <li>
        <input
          type="file"
          accept="image/*"
          className={styles.input}
          //   onChange={onInputChange}
          name={fileName}
        />
        <button
          type="button"
          className={styles.button}
          //   onClick={onButtonClick}
          name={key}
        >
          {name}
        </button>
      </li>
    </div>
  );
};

export default ImageButtonList;
