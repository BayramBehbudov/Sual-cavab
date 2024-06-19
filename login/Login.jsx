import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { Context } from "../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(false);
  const [surname, setSurname] = useState(false);
  const [email, setEmail] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState(true);

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const { setUserName } = useContext(Context);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function transform() {
    if (!name) {
      const firstName = nameRef.current.value;
      firstName && setName(true);
      setUserName(firstName);
      setWelcomeMsg(false);
    } else if (!surname) {
      surnameRef.current.value && setSurname(true);
    } else if (!email) {
      isValidEmail(emailRef.current.value) && setEmail(true);
    }

    if (name && surname && selectedOption && email) {
      navigate("/home");
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div
      className={style.container}
      onKeyDown={(event) => event.key === "Enter" && transform()}
    >
      <div className={style.context}>
        <div className={style.bottom}>
          <div className={style.radioContainer}>
            <label>
              <input
                type="radio"
                value="ferdi"
                checked={selectedOption === "ferdi"}
                onChange={handleOptionChange}
              />
              Fərdi
            </label>
            <label>
              <input
                type="radio"
                value="yarisma"
                checked={selectedOption === "yarisma"}
                onChange={handleOptionChange}
              />
              Yarışma
            </label>
          </div>

          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            className={email ? style.top3 : undefined}
            onFocus={() => {
              setEmail(false);
            }}
          />

          <input
            type="text"
            placeholder="Surname"
            ref={surnameRef}
            className={surname ? style.top2 : undefined}
            onFocus={() => {
              setSurname(false);
            }}
          />

          <input
            ref={nameRef}
            placeholder="Name"
            className={name ? style.top1 : undefined}
            onFocus={() => {
              setName(false);
            }}
          />

          <button onClick={transform}>
            {name && surname && selectedOption ? "Submit" : "Send"}
          </button>
        </div>
        <div className={welcomeMsg ? style.welcomeMsg : style.displayN}>
          Salam, Dev. Aşağıdakı formu dolduraq aramıza qoşula bilərsən
        </div>
      </div>
    </div>
  );
};

export default Login;
