import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { emptyCart } from "../../redux/Shopping/shopping-actions";
import { useHistory } from "react-router-dom";
import {
  FinalizareComandaTitle,
  ProduseComandate,
  ProduseComandateWrapper,
  DetaliiComandaWrapper,
  ProduseDetaliiWrapper,
  LabelTextArea,
  RadioLabelWrapper,
  RadioLabelText,
} from "./index.css";
import {
  TotalText,
  ButonFinalizeaza,
  TransportText,
} from "../CosCumparaturi/index.css";
import { RegisterAddress } from "../ContulMeu/index.css";
import Axios from "axios";

const FinalizareComanda = ({ cart, emptyCart }) => {
  const history = useHistory();
  const [pretTotal, setPretTotal] = useState(0);
  const [adresa, setAdresa] = useState("");
  const [telefon, setTelefon] = useState("");
  const [username, setUsername] = useState("");
  const [costTransport, setCostTransport] = useState(10);
  const [observatii, setObservatii] = useState("");

  const PlaseazaComanda = () => {
    if (adresa.trim() === "" || telefon.trim() === "") return;
    trimiteComandaSpreBackend();
  };

  const trimiteComandaSpreBackend = () => {
    Axios.post("/comanda", {
      detaliiComanda: JSON.stringify(cart),
      adresa: adresa,
      telefon: telefon,
      username: username,
      pret: pretTotal,
      observatii: observatii,
    }).then((response) => {
      if (response.data && response.data.err) {
        console.log("a aparut o eroare");
      } else {
        history.push(`/comanda-plasata`);
        emptyCart();
      }
    });
  };

  useEffect(() => {
    Axios.get("/logare").then((response) => {
      if (response.data && response.data.loggedIn) {
        setAdresa(response.data.user[0].Adresa);
        setTelefon(response.data.user[0].Telefon);
        setUsername(response.data.user[0].Username);
      }
    });
  }, []);
  useEffect(() => {
    let pret = 0;
    cart.forEach((item) => {
      pret += item.qty * item.pret;
    });
    if (pret < 35) {
      pret += 10;
    } else {
      setCostTransport(0);
    }
    setPretTotal(pret);
  }, [cart, pretTotal, setPretTotal]);
  return (
    <>
      <FinalizareComandaTitle>Sumar Comanda</FinalizareComandaTitle>
      <ProduseDetaliiWrapper>
        <ProduseComandateWrapper>
          <ProduseComandate>Produse Comandate</ProduseComandate>
          {cart.length > 0 ? (
            cart.map((element) => {
              return (
                <div>
                  {element.qty} x {element.denumire}
                </div>
              );
            })
          ) : (
            <h1></h1>
          )}
          {cart.length > 0 ? (
            <>
              <TransportText>Transport: {costTransport} Lei</TransportText>
              <TotalText>
                <span style={{ color: "black" }}>Total:</span> {pretTotal} Lei
              </TotalText>
            </>
          ) : (
            <h1>Total:0 Lei</h1>
          )}
        </ProduseComandateWrapper>
        <DetaliiComandaWrapper>
          <ProduseComandate>Detalii Comanda</ProduseComandate>
          <LabelTextArea>Adresa de livrare</LabelTextArea>
          <RegisterAddress
            rows="5"
            value={adresa}
            onChange={(e) => setAdresa(e.target.value)}
          />
          <LabelTextArea>Telefon</LabelTextArea>
          <RegisterAddress
            rows="1"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
          <LabelTextArea>Observatii Comanda</LabelTextArea>
          <RegisterAddress
            rows="5"
            onChange={(e) => setObservatii(e.target.value)}
          />
          <LabelTextArea>
            Metoda de plata(Momentan, avem disponibila doar varianta de plata
            ramburs)
          </LabelTextArea>
          <RadioLabelWrapper>
            <input type="radio" checked />
            <RadioLabelText>Plata ramburs</RadioLabelText>
          </RadioLabelWrapper>
          <br></br>
          <ButonFinalizeaza onClick={PlaseazaComanda}>
            Plaseaza Comanda
          </ButonFinalizeaza>
        </DetaliiComandaWrapper>
      </ProduseDetaliiWrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch(emptyCart()),
  };
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalizareComanda);
