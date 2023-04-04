import styled from "styled-components";
import { Footer } from "./footer";
import { standardColors } from "../../palettes/standardColors.style";

const FooterStyled = styled(Footer)`
  background-color: ${standardColors.blue1};
  color: white;
`;

export { FooterStyled };
