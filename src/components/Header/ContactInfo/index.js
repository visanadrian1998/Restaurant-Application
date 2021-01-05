import React from "react";
import {
  ContactWrapperCss,
  TelephoneTextCss,
  TelephoneWrapperCss,
  InstagramWrapperCss,
} from "./index.css";
import { ReactComponent as Telephone } from "./svg/tel.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";
import { ReactComponent as Mail } from "./svg/mail.svg";
import { ReactComponent as Facebook } from "./svg/facebook.svg";

class ContactInfo extends React.Component {
  render() {
    return (
      <ContactWrapperCss>
        <InstagramWrapperCss>
          <Instagram />
        </InstagramWrapperCss>
        <InstagramWrapperCss>
          <Mail />
        </InstagramWrapperCss>
        <InstagramWrapperCss>
          <Facebook />
        </InstagramWrapperCss>
        <TelephoneWrapperCss>
          <Telephone />
          <TelephoneTextCss>0760 231 204</TelephoneTextCss>
        </TelephoneWrapperCss>
      </ContactWrapperCss>
    );
  }
}
export default ContactInfo;
