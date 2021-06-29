import styled from "styled-components";

export const LoginAndRegisterWrapper = styled.div`
  border-radius: 5px;
  text-align: center;
  width: 100%;
  font-family: "Roboto";
`;
export const LoginAndRegisterOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const LoginAndRegisterButton = styled.h2`
  margin-top: 0;
  font-family: "SummitRegular-Inline";
  padding-left: 50px;
  padding-right: 50px;
  cursor: pointer;
`;
export const LoginWrapper = styled.div`
  display: inline-block;
`;
export const LoginInput = styled.input`
  display: block;
  height: 44px;
  font-size: 17px;
  color: #555555;
  border: 1px solid #e3e4e5;
  box-shadow: none;
  background-color: #f2f4f5;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 6px 12px;
  width: 400px;
  font-family: "Roboto";
  box-shadow: 1px 4px 22px -4px rgb(0 0 0 / 30%);
  outline: none;
`;
export const RegisterInput = styled.input`
  display: block;
  height: 44px;
  font-size: 17px;
  color: #555555;
  border: 1px solid #e3e4e5;
  box-shadow: none;
  background-color: #f2f4f5;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 6px 12px;
  width: 400px;
  font-family: "Roboto";
  box-shadow: 1px 4px 22px -4px rgb(0 0 0 / 30%);
  outline: none;
`;
export const RegisterAddress = styled.textarea`
  display: block;
  font-size: 17px;
  color: #555555;
  border: 1px solid #e3e4e5;
  box-shadow: none;
  background-color: #f2f4f5;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 6px 12px;
  width: 400px;
  font-family: "Roboto";
  box-shadow: 1px 4px 22px -4px rgb(0 0 0 / 30%);
  outline: none;
  resize: none;
`;
export const LoginRegisterSubmit = styled.button`
  font-family: "SummitRegular-Inline";
  margin-bottom: 50px;
  margin-top: 30px;
  background-color: #afeeee;
  border: none;
  padding: 10px 50px;
  border-radius: 50px 0px;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  width: 300px;
  height: 50px;
  :hover {
    background-color: black;
    color: #afeeee;
  }
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 1px 4px 22px -4px rgb(0 0 0 / 30%);
`;
export const ErrorMessage = styled.p`
  font-family: "Roboto";
  color: tomato;
  margin: 0;
  font-weight: bold;
`;
export const LinkCss = styled.span`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`;
export const ComenziLinkCss = styled.h3`
  cursor: pointer;
`;
