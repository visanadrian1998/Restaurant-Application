import styled from "styled-components";

export const ContactWrapperCss = styled.div`
  display: flex;
  align-items: center;
`;
export const TelephoneWrapperCss = styled.div`
  display: flex;
  svg {
    fill: white;
  }
  margin-top: -5px;
`;
export const TelephoneTextCss = styled.p`
  font-family: "SummitRegular-Inline";
  color: white;
  margin: 0;
  padding: 3px 0 0 10px;
`;
export const InstagramWrapperCss = styled.div`
  width: 32px;
  text-align: center;
  svg {
    cursor: pointer;
    fill: white;
  }
  svg:hover {
    opacity: 0.6;
  }
  margin-right: 15px;
`;
export const MailWrapperCss = styled.div`
  width: 32px;
  text-align: center;
  margin-right: 15px;
  svg {
    cursor: pointer;
  }
  svg:hover {
    opacity: 0.6;
  }
`;
