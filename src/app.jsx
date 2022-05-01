import "./app.css";
import Header from "./components/header/header";
import { app } from "./service/firebaseConfig";
import React, { useState, useRef } from "react";
import DbService from "./service/realtimeService";
import AuthService from "./service/authService";

const dbService = new DbService();
const authService = new AuthService();
function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let idRef = useRef();
  let nameRef = useRef();
  let emailRef = useRef();

  const btnClick = () => {
    dbService.writeUserData(id, name, email);
  };

  const btnAuthClick = (event) => {
    event.preventDefault();
    let providerName = event.currentTarget.textContent;
    authService.checkProvider(providerName);
    authService.signInWithPopup();
  };

  const changeValue = (event) => {
    let inputName = event.currentTarget.name;
    switch (inputName) {
      case "id":
        setId(idRef.current.value);
        break;

      case "name":
        setName(nameRef.current.value);
        break;

      case "email":
        setEmail(emailRef.current.value);
        break;

      default:
        alert("존재하지 않는 입력값입니다.");
        break;
    }
  };

  return (
    <div>
      <Header />
      <h1>Hello :)!!</h1>
      <label>id : </label>
      <input type="text" name="id" ref={idRef} onChange={changeValue} />
      <br></br>
      <label>name : </label>
      <input type="text" name="name" ref={nameRef} onChange={changeValue} />
      <br></br>
      <label>email: </label>
      <input type="text" name="email" ref={emailRef} onChange={changeValue} />
      <br></br>
      <button onClick={btnClick}>Save Data</button>
      <br></br>
      <button onClick={btnAuthClick}>Github</button>
    </div>
  );
}

export default App;
