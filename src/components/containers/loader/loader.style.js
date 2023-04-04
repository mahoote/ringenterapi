import styled, { css } from "styled-components";
import { LoaderContent } from "./loader";

const LoaderContentStyled = styled(LoaderContent)`
  transition: opacity 1s;

  ${(props) =>
    props.divShown === false &&
    css`
      opacity: 0;
    `};
`;

export { LoaderContentStyled };
