import styled from "styled-components";
import { BorderImage } from "./borderImage";

const BorderImageStyled = styled(BorderImage)`
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
`;

export { BorderImageStyled };
