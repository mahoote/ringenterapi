import styled from "styled-components";
import { TextAreaInputTag } from "./textAreaInput";
import { standardColors } from "../../../palettes/standardColors.style";

const TextAreaInputTagStyled = styled(TextAreaInputTag)`
  border: 0;
  border-bottom: 1px solid ${standardColors.black1};
  box-shadow: unset;
  border-radius: 0;

  width: 100%;

  resize: none;

  &:focus {
    outline: none;
  }
`;

export { TextAreaInputTagStyled };
