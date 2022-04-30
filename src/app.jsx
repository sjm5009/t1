import "./app.css";
import Header from "./components/header/header";
import { app } from "./service/firebaseConfig";
import React, { useState, useRef } from "react";
import DbService from "./service/realtimeService";

const firebaseConfig = app;
const dbService = new DbService();
function App() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let idRef = useRef();
  let nameRef = useRef();
  let emailRef = useRef();

  const btnClick = () => {
    alert(`${id} ${name} ${email}`);
    dbService.writeUserData(id, name, email);
  };

  const changeValue = () => {
    setId(idRef.current.value);
    setName(nameRef.current.value);
    setEmail(emailRef.current.value);
  };

  return (
    <div>
      <Header />
      <h1>Hello :)!!</h1>
      <label>id : </label>
      <input type="text" ref={idRef} onChange={changeValue} />
      <br></br>
      <label>name : </label>
      <input type="text" ref={nameRef} onChange={changeValue} />
      <br></br>
      <label>email: </label>
      <input type="text" ref={emailRef} onChange={changeValue} />
      <br></br>
      <button onClick={btnClick}>Save Data</button>
    </div>
  );
}

export default App;
