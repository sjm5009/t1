import "./app.css";
import Header from "./components/header/header";
import { app } from "./service/firebaseConfig";
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DbService from "./service/realtimeService";
import AuthService from "./service/authService";
import ImageService from "./service/ImageSerivece";
import Goods from "./components/goods/goods";
import Footer from "./components/footer/footer";
import GoodsAddForm from "./components/goods_add_form/goods_add_form";
import AdminLogin from "./components/admin/login/admin_login";

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
    <BrowserRouter>
      {/* <div id="wrap"> */}
      <Routes>
        <Route
          path="/"
          element={
            <AdminLogin dbService={dbService} authService={authService} />
          }
        ></Route>

        <Route
          path="/goods/list"
          element={
            <Goods
              dbService={dbService}
              imageService={imageService}
              authService={authService}
            />
          }
        ></Route>

        <Route
          path="/goods/new"
          element={
            <GoodsAddForm dbService={dbService} imageService={imageService} />
          }
        ></Route>
      </Routes>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
