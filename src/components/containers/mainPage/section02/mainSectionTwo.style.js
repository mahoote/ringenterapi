import styled, { css } from "styled-components";
import { standardColors } from "../../../../palettes/standardColors.style";
import { device } from "../../../../sizes/screenSize.style";
import { MainSectionTwo, MainSectionTwoText } from "./mainSectionTwo";

const MainSectionTwoStyled = styled(MainSectionTwo)`
  color: ${standardColors.blue3};
  background-color: ${standardColors.blue1};

  padding: 30em 2em;

  @media screen and ${device.mobileL} {
    padding-left: 5em;
    padding-right: 5em;
  }
  @media screen and ${device.laptop} {
    padding-left: 20em;
    padding-right: 20em;
  }
`;

const MainSectionTwoTextStyled = styled(MainSectionTwoText)`
  position: fixed;
  top: 50%;
  left: 15%;
  transform: translate(-10%, -50%);
  z-index: 0;

  @media screen and ${device.mobileL} {
    left: 30%;
    transform: translate(-20%, -50%);
  }
  @media screen and ${device.laptop} {
    left: 40%;
    transform: translate(-35%, -50%);
  }

  transition: opacity 0.5s;

  ${(props) =>
    props.showElement === false &&
    css`
      opacity: 0;
    `}
`;

export { MainSectionTwoStyled, MainSectionTwoTextStyled };
