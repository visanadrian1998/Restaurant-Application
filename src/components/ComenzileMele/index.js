import React from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import {
  ComandaWrapper,
  ComandaDetaliu,
  ComenziWrapper,
  ComandaSubDetaliu,
} from "./index.css";
import { RecomandariTitle } from "../MainContent/Slider/index.css";

const ComenzileMele = () => {
  const [comenzi, setComenzi] = useState([]);
  useEffect(() => {
    Axios.get("/nrcomenzi").then((response) => {
      if (response && response.data) {
        setComenzi(response.data);
      }
    });
  }, []);
  return (
    <>
      <RecomandariTitle>Comenzile mele</RecomandariTitle>
      <ComenziWrapper>
        <ComandaWrapper>
          <ComandaDetaliu>Numar comanda</ComandaDetaliu>
          <ComandaDetaliu>Adresa</ComandaDetaliu>
          <ComandaDetaliu>Observatii</ComandaDetaliu>
          <ComandaDetaliu>Telefon</ComandaDetaliu>
          <ComandaDetaliu>Pret</ComandaDetaliu>
          <ComandaDetaliu>Produse comandate</ComandaDetaliu>
        </ComandaWrapper>
        {comenzi &&
          comenzi.map((comanda) => {
            return (
              <ComandaWrapper>
                <ComandaDetaliu>{comanda && comanda.idComanda}</ComandaDetaliu>
                <ComandaDetaliu>{comanda && comanda.Adresa}</ComandaDetaliu>
                <ComandaDetaliu>{comanda && comanda.Observatii}</ComandaDetaliu>
                <ComandaDetaliu>{comanda && comanda.Telefon}</ComandaDetaliu>
                <ComandaDetaliu>{comanda && comanda.Pret}</ComandaDetaliu>
                <ComandaDetaliu>
                  {JSON.parse(comanda && comanda.DetaliiComanda).map(
                    (detaliu) => {
                      return (
                        <ComandaSubDetaliu>
                          {detaliu && detaliu.denumire} x{" "}
                          {detaliu && detaliu.qty}
                        </ComandaSubDetaliu>
                      );
                    }
                  )}
                </ComandaDetaliu>
              </ComandaWrapper>
            );
          })}
      </ComenziWrapper>
    </>
  );
};

export default ComenzileMele;
