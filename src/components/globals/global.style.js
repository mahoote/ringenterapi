import { createGlobalStyle } from "styled-components";
import { standardColors } from "../../palettes/standardColors.style";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${standardColors.white1};
    font-family: "inria-sans-light", serif ;
  }
`;

export { GlobalStyle };
