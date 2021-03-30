import React from "react";
import { RecomandariTitle } from "../MainContent/Slider/index.css";
import {
  LoginAndRegisterWrapper,
  LoginAndRegisterOptions,
  LoginAndRegisterButton,
  LoginWrapper,
  LoginInput,
  LoginRegisterSubmit,
  ErrorMessage,
} from "./index.css";
import Register from "./Register";
import Axios from "axios";
import { useEffect, useState, useRef } from "react";

const ContulMeu = () => {
  Axios.defaults.withCredentials = true;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);
  const [numeUser, setNumeUser] = useState("");
  const [loginOrRegister, setLoginOrRegister] = useState("login");

  const Error = useRef(null);

  useEffect(() => {
    Axios.get("/logare").then((response) => {
      if (response.data && response.data.loggedIn) {
        setLoginStatus(response.data.loggedIn);
        setNumeUser(response.data.user[0].Nume);
      }
    });
  }, [loginStatus]);

  const validareLogin = () => {
    if (username === "") {
      Error.current.innerHTML = "Campul 'Username' este obligatoriu";
      return;
    }
    if (password === "") {
      Error.current.innerHTML = "Campul 'Parola' este obligatoriu";
      return;
    }

    Error.current.innerHTML = "&nbsp;";
    trimiteLoginSpreBackend();
  };

  const trimiteLoginSpreBackend = () => {
    Axios.post("/logare", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data && response.data.length > 0) {
        //Error.current.innerHTML = `Buna ${response.data[0].Nume}`;
        setLoginStatus(true);
      } else {
        Error.current.innerHTML = "Username sau parola incorecta!";
      }
    });
  };
  const logOut = () => {
    Axios.post("/logout").then((response) => {
      if (response.data === "V-ati delogat cu succes.") {
        setLoginStatus(false);
      }
    });
  };

  return (
    <>
      <RecomandariTitle>Contul Meu</RecomandariTitle>
      {loginStatus === true ? (
        <>
          <h1>bine ai venit in cont {numeUser}</h1>
          <p onClick={logOut}>Log Out</p>
        </>
      ) : (
        <>
          <LoginAndRegisterOptions>
            <LoginAndRegisterButton
              onClick={() => setLoginOrRegister("login")}
              style={{
                textDecoration:
                  loginOrRegister === "login" ? "underline" : "none",
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
            {loginOrRegister === "login" ? (
              <LoginWrapper>
                <LoginInput
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <LoginInput
                  type="password"
                  placeholder="Parola"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorMessage ref={Error}>&nbsp;</ErrorMessage>
                <LoginRegisterSubmit onClick={validareLogin}>
                  INTRA IN CONT
                </LoginRegisterSubmit>
              </LoginWrapper>
            ) : (
              <Register />
            )}
          </LoginAndRegisterWrapper>
        </>
      )}
    </>
  );
};
export default ContulMeu;
