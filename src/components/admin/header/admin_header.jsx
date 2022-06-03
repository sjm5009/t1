import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./admin_header.module.css";

const AdminHeader = (props) => {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const getButtonAttrSetting = () => {
    switch (path) {
      case "new":
        return "목록";
      case "list":
        return "상품추가";
      default:
        return "상품추가";
    }
  };

  const getButtonPathSetting = () => {
    switch (path) {
      case "new":
        return "/goods/list";
      case "list":
        return "/goods/new";
      default:
        return "/goods/new";
    }
  };

  const btnName = getButtonAttrSetting();
  const btnClickPath = getButtonPathSetting();
  console.log(btnClickPath);

  const onClick = () => {
    navigation(btnClickPath);
  };

  return (
    <header>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li onClick={onClick}>{btnName}</li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
