import styled from "styled-components";

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
`;
export const TotalText = styled.h1`
  font-family: "SummitRegular-Inline";
  color: #6cbd45;
`;
export const TransportText = styled.h3`
  font-family: "SummitRegular-Inline";
  color: #6cbd45;
`;
export const CartFooterButoane = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-family: "SummitRegular-Inline";
  font-weight: bold;
  font-size: 15px;
`;
export const ButonGoleste = styled.span`
  padding: 8px 30px;
  background-color: tomato;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  border-radius: 50px 0px;
  :hover {
    background-color: black;
    color: tomato;
  }
`;
export const ButonHome = styled.span`
  padding: 8px 30px;
  background-color: #afeeee;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  border-radius: 50px 0px;
  :hover {
    background-color: black;
    color: #afeeee;
  }
`;
export const FinalizeazaWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 30vh;
`;
export const ButonFinalizeaza = styled.span`
  font-family: "SummitRegular-Inline";
  font-weight: bold;
  font-size: 20px;
  padding: 10px 35px;
  background-color: #6cbd45;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  border-radius: 50px 0px;
`;
export const CosGol = styled.h2`
  text-align: center;
  font-family: "SummitRegular-Inline";
  font-weight: bold;
  margin-bottom: 40vh;
  padding-top: 50px;
`;
