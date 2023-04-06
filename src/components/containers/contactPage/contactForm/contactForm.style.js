import styled from "styled-components";
import { ContactFormContent, FormInputs } from "./contactForm";
import { device } from "../../../../sizes/screenSize.style";

const ContactFormContentStyled = styled(ContactFormContent)`
  background-color: white;
`;

const FormInputsStyled = styled(FormInputs)`
  @media screen and ${device.tablet} {
    margin: 0 3rem;
  }

  @media screen and ${device.tabletMax} {
    width: 100vw;
  }
`;

export { ContactFormContentStyled, FormInputsStyled };
