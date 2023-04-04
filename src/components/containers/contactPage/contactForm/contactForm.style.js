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
`;

export { ContactFormContentStyled, FormInputsStyled };
