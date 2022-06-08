import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./admin_header.module.css";

const AdminHeader = ({ authService, setUserInfo }) => {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const buttonStyle = location.pathname === "/" ? styles.none : styles.block;

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

  const onLogout = () => {
    authService.signOut();
    navigation("/");
    setUserInfo();
  };

  return (
    <header>
      <div className={styles.logo}>
        <img src="/assets/logo.png" alt="" />
      </div>
      <nav>
        <ul>
          <li className={buttonStyle} onClick={onClick}>
            {btnName}
          </li>
          <li className={buttonStyle} onClick={onLogout}>
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
