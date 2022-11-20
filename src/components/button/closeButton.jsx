import React from "react";
import styles from "./closeButton.module.css";

const CloseButton = ({ color, size, name, closePopup }) => {
  const getColor = () => {
    switch (color) {
      case "red":
        return styles.red;
      case "blue":
        return styles.blue;
      case "pink":
        return styles.pink;
      default:
        return styles.red;
    }
  };
  const btnColor = getColor();
  const getSize = () => {
    switch (size) {
      case "large":
        return styles.large;
      case "medium":
        return styles.medium;
      case "small":
        return styles.small;
      default:
        return styles.small;
    }
  };
  const btnSize = getSize();
  const onClose = () => {
    closePopup(true);
  };
  return (
    <div className={styles.closeBtn}>
      <button className={`${styles.button} ${btnColor} ${btnSize}`} onClick={onClose}>
        {name}
      </button>
    </div>
  );
};

export default CloseButton;
