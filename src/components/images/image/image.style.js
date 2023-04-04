import styled, { css } from "styled-components";
import { Image } from "./image";
import { device } from "../../../sizes/screenSize.style";

const ImageStyled = styled(Image)`
  position: relative;

  ${(props) => css`
    width: ${props.width};
    top: ${props.offsetY};
    left: ${props.offsetX};
  `};

  @media screen and ${device.tabletMax} {
    ${(props) => css`
      width: ${props.widthMobile};
      top: ${props.offsetYMobile};
      left: ${props.offsetXMobile};
    `};
  } ;
`;

export { ImageStyled };
