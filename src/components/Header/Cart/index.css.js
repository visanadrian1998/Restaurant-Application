import styled from "styled-components";

export const CartWrapperCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 33.333%;
  svg {
    width: 40px;
    height: 40px;
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
  padding: 10px;
  :hover {
    input {
      width: 250px;
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
