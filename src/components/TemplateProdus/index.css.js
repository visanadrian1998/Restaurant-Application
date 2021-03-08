import styled from "styled-components";

export const ProdusContainerCss = styled.div`
  background-color: white;
  flex-basis: 25.1%;
  margin-right: 10px;
  margin-bottom: 30px;
  justify-content: center;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 11%);
  border-radius: 2%;
  padding: 15px 7px 0px 7px;
  position: relative;
  font-family: "Roboto";
  :hover {
    div {
      opacity: 1;
    }
    img {
      transform: scale(1.08);
    }
  }
`;
export const ProdusImageCss = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 80%;
    width: 80%;
    transition-duration: 1s;
    object-fit: cover;
  }
`;
export const ProdusDenumire = styled.h3`
  text-align: center;
`;
export const ProdusIngrediente = styled.p`
  height: 50px;
  text-align: center;
  font-size: 15px;
`;
export const ProdusPret = styled.h5`
  text-align: center;
`;
export const ButonCumparare = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: tomato;
  right: 4%;
  top: 40%;
  opacity: 0;
  transition-duration: 1s;
  cursor: pointer;
`;
