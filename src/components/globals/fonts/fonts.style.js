import { createGlobalStyle } from "styled-components";

import InriaSansBold from "../../../assets/fonts/inriaSans/InriaSans-Bold.ttf";
import InriaSansRegular from "../../../assets/fonts/inriaSans/InriaSans-Regular.ttf";
import InriaSansLight from "../../../assets/fonts/inriaSans/InriaSans-Light.ttf";

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'inria-sans-bold';
    src: url(${InriaSansBold}) format('opentype');
  }
  @font-face {
    font-family: 'inria-sans-regular';
    src: url(${InriaSansRegular}) format('opentype');
  }
  @font-face {
    font-family: 'inria-sans-light';
    src: url(${InriaSansLight}) format('opentype');
  }

`;

export { FontStyles };
