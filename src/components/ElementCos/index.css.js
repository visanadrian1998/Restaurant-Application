import styled from "styled-components";

export const ElementCosWrapper = styled.div`
  height: 50px;
  font-family: "SummitRegular-Inline";
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-top: 20px;
  border-bottom: 1px solid #f2f2f2;
`;
export const ElementCosDenumire = styled.h3`
  display: block;
  margin: 0;
`;
export const ElementCosPret = styled.span``;
export const ElementCosCantitateText = styled.h5`
  margin: 0;
`;
export const ElementCantitateWrapper = styled.div``;
export const ElementCosCantitate = styled.input`
  type: number;
  font-family: "SummitRegular-Inline";
  font-weight: bold;
  padding: 0;
  border: 0;
  outline: none;
  text-align: center;
  background-color: white;
  width: 60px;
`;
export const DenumirePretWrapper = styled.div`
  flex-basis: 25%;
`;
export const DeleteWrapper = styled.div`
  margin-top: 5px;
  svg {
    height: 25px;
    width: 25px;
    fill: tomato;
    cursor: pointer;
    transition: 0.4s;
    :hover {
      transform: rotate(30deg);
    }
  }
`;
export const AjusteazaCantitateWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
`;
export const PlusMinusCantitate = styled.span`
  cursor: pointer;
`;
