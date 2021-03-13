import React from "react";
import { RecomandariTitle } from "../MainContent/Slider/index.css";
import {
  LoginAndRegisterWrapper,
  LoginAndRegisterOptions,
  LoginAndRegisterButton,
} from "./index.css";
import Login from "./Login";
import Register from "./Register";
import Axios from "axios";
import { useEffect, useState } from "react";

const ContulMeu = () => {
  //   const [usernameReg, setUsernameReg] = useState("");
  //   const [passwpordReg, setPasswordReg] = useState("");

  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [loginOrRegister, setLoginOrRegister] = useState("login");
  return (
    <>
      <RecomandariTitle>Contul Meu</RecomandariTitle>
      <LoginAndRegisterOptions>
        <LoginAndRegisterButton
          onClick={() => setLoginOrRegister("login")}
          style={{
            textDecoration: loginOrRegister === "login" ? "underline" : "none",
          }}
        >
          Logare
        </LoginAndRegisterButton>
        <LoginAndRegisterButton
          onClick={() => setLoginOrRegister("register")}
          style={{
            textDecoration:
              loginOrRegister === "register" ? "underline" : "none",
          }}
        >
          Inregistrare
        </LoginAndRegisterButton>
      </LoginAndRegisterOptions>
      <LoginAndRegisterWrapper>
        {loginOrRegister === "login" ? <Login /> : <Register />}
      </LoginAndRegisterWrapper>
    </>
  );
};
export default ContulMeu;
