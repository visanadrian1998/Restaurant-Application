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
import jsPDF from "jspdf";

const FinalizareComanda = ({ cart, emptyCart }) => {
  const history = useHistory();
  const [pretTotal, setPretTotal] = useState(0);
  const [adresa, setAdresa] = useState("");
  const [telefon, setTelefon] = useState("");
  const [username, setUsername] = useState("");
  const [costTransport, setCostTransport] = useState(10);
  const [reducere, setReducere] = useState(false);
  const [observatii, setObservatii] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF({ unit: "px" });
    doc.text("Scandinavia Pizza", 170, 60);
    doc.text(`Adresa:${adresa}`, 50, 110);
    doc.text(`Telefon:${telefon}`, 50, 130);
    doc.text(`Ora comenzii:${new Date().toLocaleString()}`, 50, 150);
    doc.text(`Observatii:${observatii}`, 50, 170);
    doc.text("Produs", 50, 190);
    doc.text("Pret unitar", 250, 190);
    doc.text("Cantitate", 350, 190);
    let cnt = 0;
    cart.forEach((element) => {
      doc.text(element.denumire, 50, 210 + cnt * 20);
      doc.text(element.pret.toString(), 250, 210 + cnt * 20);
      doc.text(element.qty.toString(), 350, 210 + cnt * 20);
      cnt++;
    });
    doc.text("Transport", 50, 210 + cnt * 20);
    doc.text(costTransport.toString() + " lei", 150, 210 + cnt * 20);
    cnt++;
    doc.text("Reducere", 50, 210 + cnt * 20);
    doc.text(reducere ? "10%" : "0%", 150, 210 + cnt * 20);
    cnt++;
    doc.text("Total", 250, 210 + cnt * 20);
    doc.text(pretTotal.toString() + " lei", 350, 210 + cnt * 20);
    doc.save("comanda.pdf");
  };

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
        generatePDF();
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
    Axios.get("/nrcomenzi").then((response) => {
      console.log(response.data.length);
      if (response && response.data && response.data.length >= 3) {
        setReducere(true);
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
    reducere ? setPretTotal(pret * 0.95) : setPretTotal(pret);
  }, [cart, pretTotal, setPretTotal, reducere]);
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
              {reducere ? (
                <TransportText>Beneficiezi de reducere 5%!</TransportText>
              ) : (
                <TransportText>
                  La minim 3 comenzi efectuate beneficiezi de reducere 5%!
                </TransportText>
              )}

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
