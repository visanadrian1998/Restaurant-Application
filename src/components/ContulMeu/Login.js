import React from "react";
import {
  LoginInput,
  LoginRegisterSubmit,
  LoginWrapper,
  ErrorMessage,
} from "./index.css";
import Axios from "axios";
import { useState, useRef } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Error = useRef(null);

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
        Error.current.innerHTML = `Buna ${response.data[0].Nume}`;
      } else {
        Error.current.innerHTML = "Username sau parola incorecta!";
      }
    });
  };

  return (
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
  );
};
export default Login;
