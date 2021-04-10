import styled from "styled-components";

export const CartWrapperCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 33.333%;
  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  > * {
    padding: 0px 5px 0px 5px;
  }
`;
export const SearchButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  cursor: default;
  opacity: 1;
`;
export const SearchBox = styled.div`
  height: 40px;
  :hover {
    input {
      width: 200px;
      padding: 0 10px;
    }
    a {
      opacity: 0;
    }
  }
`;
export const Cauta = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
  background: black;
  border-radius: 40px;
  ::placeholder {
    color: white;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: white;
  }

  ::-ms-input-placeholder {
    color: white;
  }
`;
export const CartLogoWrapper = styled.div`
  position: relative;
  display: flex;
  text-align: center;
`;
export const CartLogoQuantity = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  height: 25px;
  width: 25px;
  z-index: 999999;
  margin: 0;
  border-radius: 50%;
  background-color: tomato;
`;
export const CartLogoQuantityNumber = styled.p`
  margin: 0;
  color: black;
  font-family: "Roboto";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
