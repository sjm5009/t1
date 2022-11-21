import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./admin_header.css";

const AdminHeader = ({ authService, user }) => {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const buttonStyle = location.pathname === "/" ? "none" : "block";

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

  const getButtonDisplayStyle = (e) => {
    document.querySelector("#button_wrap").classList.toggle("active");
  };

  const btnName = getButtonAttrSetting();
  const btnClickPath = getButtonPathSetting();

  const onClick = () => {
    navigation(btnClickPath, { state: { user } });
  };

  const onLogout = () => {
    authService.signOut();
    navigation("/");
  };

  return (
    <header>
      <div className="logo">
        <a
          onClick={() => {
            navigation("/goods/list");
          }}
        >
          <img src="/assets/logo.png" alt="" />
        </a>
      </div>
      <nav>
        <div className={`menu ${buttonStyle}`}>
          <img onClick={getButtonDisplayStyle} src="/assets/menu_icon.png" alt="" />
        </div>
        <ul id="button_wrap" className={`button_wrap ${buttonStyle}`}>
          <li onClick={onClick}>{btnName}</li>
          <li onClick={onLogout}>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
