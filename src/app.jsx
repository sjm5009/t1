import "./app.css";
import Header from "./components/header/header";
import { app } from "./service/firebaseConfig";
import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import DbService from "./service/realtimeService";
import AuthService from "./service/authService";
import ImageService from "./service/ImageSerivece";
import Goods from "./components/goods/goods";
import Footer from "./components/footer/footer";
import GoodsAddForm from "./components/goods_add_form/goods_add_form";
import AdminLogin from "./components/admin/login/admin_login";
import AdminHeader from "./components/admin/header/admin_header";

const dbService = new DbService();
const authService = new AuthService();
const imageService = new ImageService();
function App() {
  const [user, setUser] = useState({});

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

  useEffect(() => {
    authService.onAuthChanged((data) => {
      if (data) {
        setUser({ uid: data.uid, email: data.email });
      } else {
        // User is signed out
        setUser({});
      }
    });
  }, [user.uid, authService]);

  return (
    <BrowserRouter>
      {/* <div id="wrap"> */}
      <AdminHeader authService={authService} user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <AdminLogin dbService={dbService} authService={authService} />
          }
        ></Route>

        <Route
          path="/goods/list"
          element={<Goods dbService={dbService} imageService={imageService} />}
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
