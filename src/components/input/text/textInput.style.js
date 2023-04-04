import styled from "styled-components";
import { TextInputTag } from "./textInput";
import { standardColors } from "../../../palettes/standardColors.style";

const TextInputTagStyled = styled(TextInputTag)`
  border: 0;
  border-bottom: 1px solid ${standardColors.black1};
  box-shadow: unset;
  border-radius: 0;

  width: 100%;

  &:focus {
    outline: none;
  }
`;

export { TextInputTagStyled };
