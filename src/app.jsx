import "./app.css";
import Header from "./components/header/header";
import { app } from "./service/firebaseConfig";
import React, { useState, useRef, useEffect } from "react";
import DbService from "./service/realtimeService";
import AuthService from "./service/authService";
import ImageService from "./service/ImageSerivece";
import Goods from "./components/goods/goods";

const dbService = new DbService();
const authService = new AuthService();
const imageService = new ImageService();
function App() {
  const saveGoods = (goods) => {
    console.log(goods);
    dbService.saveGoodsInfo(goods);
  };

  const btnAuthClick = (event) => {
    event.preventDefault();
    let providerName = event.currentTarget.textContent;
    authService.checkProvider(providerName);
    authService.signInWithPopup();
  };

  return (
    <div>
      <Goods dbService={dbService} imageService={imageService} />
    </div>
  );
}

export default App;
