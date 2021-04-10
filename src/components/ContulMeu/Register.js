import React from "react";
import {
  RegisterInput,
  RegisterAddress,
  LoginRegisterSubmit,
  LoginWrapper,
  ErrorMessage,
} from "./index.css";
import Axios from "axios";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const ContulMeu = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [adresaReg, setAdresaReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
  const [telefonReg, setTelefonReg] = useState("");
  const history = useHistory();

  const Error = useRef(null);
  const validareCreeareCont = () => {
    if (nameReg === "") {
      Error.current.innerHTML = "Campul 'Nume si prenume' este obligatoriu";
      return;
    }
    if (usernameReg === "") {
      Error.current.innerHTML = "Campul 'Username' este obligatoriu";
      return;
    }
    if (adresaReg === "") {
      Error.current.innerHTML = "Campul 'Adresa' este obligatoriu";
      return;
    }
    if (telefonReg === "") {
      Error.current.innerHTML = "Campul 'Telefon' este obligatoriu";
      return;
    }
    if (passwordReg.length < 6) {
      Error.current.innerHTML =
        "Parola trebuie sa contina cel putin 6 caractere";
      return;
    }
    if (passwordReg !== confirmPasswordReg) {
      Error.current.innerHTML = "Parolele nu corespund";
      return;
    }
    Error.current.innerHTML = "&nbsp;";
    trimiteContSpreBackend();
  };

  const trimiteContSpreBackend = () => {
    Axios.post("/inregistrare", {
      username: usernameReg,
      nume: nameReg,
      adresa: adresaReg,
      telefon: telefonReg,
      password: passwordReg,
    }).then((response) => {
      if (response.data && response.data.err) {
        if (
          response.data.err.sqlMessage &&
          response.data.err.sqlMessage.includes("Duplicate")
        ) {
          Error.current.innerHTML = "Acest Username este deja folosit";
        } else {
          Error.current.innerHTML = "Inregistrare esuata";
        }
      } else {
        history.push(`/inregistrare-succes`);
      }
    });
  };

  return (
    <LoginWrapper>
      <RegisterInput
        type="text"
        placeholder="Nume si prenume"
        onChange={(e) => setNameReg(e.target.value)}
      />
      <RegisterInput
        type="text"
        placeholder="Username"
        onChange={(e) => setUsernameReg(e.target.value)}
      />
      <RegisterAddress
        rows="5"
        placeholder="Adresa"
        onChange={(e) => setAdresaReg(e.target.value)}
      />
      <RegisterInput
        type="text"
        placeholder="Telefon"
        onChange={(e) => setTelefonReg(e.target.value)}
      />
      <RegisterInput
        type="password"
        placeholder="Parola"
        onChange={(e) => setPasswordReg(e.target.value)}
      />
      <RegisterInput
        type="password"
        placeholder="Confirmare Parola"
        onChange={(e) => setConfirmPasswordReg(e.target.value)}
      />
      <ErrorMessage ref={Error}>&nbsp;</ErrorMessage>
      <LoginRegisterSubmit onClick={validareCreeareCont}>
        CREEAZA CONT
      </LoginRegisterSubmit>
    </LoginWrapper>
  );
};
export default ContulMeu;
