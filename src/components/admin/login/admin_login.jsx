import React from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../header/admin_header";
import styles from "./admin_login.module.css";

const AdminLogin = ({ dbService, authService }) => {
  const navigation = useNavigate();

  const onLogin = async (e) => {
    let loginMtd = e.target.textContent;
    authService.checkProvider(loginMtd);
    let result = await authService.signInWithPopup();
    console.log(result);
    goToGoodsList(result);
  };

  const goToGoodsList = (user) => {
    navigation("/goods/list", { state: { user: user } });
  };

  return (
    <>
      <div className={styles.wrap}>
        <AdminHeader />
        <section className={styles.container}>
          <ul className={styles.buttons}>
            <li>
              <h1 className={styles.title}>Admin Login</h1>
            </li>
            <li>
              <button onClick={onLogin}>Github</button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AdminLogin;
