import styled, { css } from "styled-components";
import { Button } from "./button";
import { standardColors } from "../../palettes/standardColors.style";

const ButtonStyled = styled(Button)`
  transition: background-color 0.5s;

  border-width: ${(props) => props.borderWidth};
  border-style: solid;
  border-color: ${standardColors.black1};
  border-radius: 0;

  background-color: transparent;
  color: ${standardColors.black1};

  padding: 0.5em 1.5em;

  ${(props) =>
    props.paddingSize === 2 &&
    css`
      padding: 1.5em 3.5em;
    `}

  &:hover {
    cursor: pointer;
    background-color: ${standardColors.blue1};
    color: white;
    border-color: ${standardColors.blue1};
  }
`;

export { ButtonStyled };
