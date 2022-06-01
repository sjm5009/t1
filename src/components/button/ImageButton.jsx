import React, { useRef, useState } from "react";
import styles from "./imageButton.module.css";
import ImageButtonList from "./imageButtonList";

const ImageButton = ({ imageService, name, uploadImage }) => {
  const fileRef = useRef();
  const loading = useState(false);

  const onButtonClick = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };

  const onInputChange = async (event) => {
    console.log(event.target.files[0]);
    const files = document.querySelector("[type=file]").files;
    let file = await imageService.upload(files);
    console.log(file);
    uploadImage(file);
  };

  return (
    <div className={styles.container}>
      <ul>
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
      </ul>
    </div>
  );
};

export default ImageButton;
