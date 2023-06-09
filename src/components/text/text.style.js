import styled, { css } from "styled-components";
import { Text, TextContentSpan, TextLink } from "./text";

const TextStyled = styled(Text)`
  color: ${(props) => props.color};
  text-decoration: none;
  overflow-wrap: break-word;
`;

const TextContentSpanStyled = styled(TextContentSpan)`
  color: ${(props) => props.highlightColor};
`;

const TextLinkStyled = styled(TextLink)`
  &:hover {
    ${(props) =>
      (props.textWeight === "bold" &&
        css`
          font-weight: initial;
        `) ||
      props.textWeight === undefined ||
      (props.textWeight === "normal" &&
        css`
          font-weight: bold;
        `)}
  }

  color: inherit !important;
`;

const HrefLinkStyled = styled("a")`
  &:hover {
    text-decoration: underline;
  }
`;

export { TextStyled, TextContentSpanStyled, TextLinkStyled, HrefLinkStyled };
