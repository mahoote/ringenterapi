import styled from "styled-components";
import { standardColors } from "../../../../palettes/standardColors.style";
import {
  AboutSectionOne,
  AboutSectionOneIntro,
  AboutSectionOneParagraph,
} from "./aboutSectionOne";
import { device } from "../../../../sizes/screenSize.style";

const AboutSectionOneStyled = styled(AboutSectionOne)`
  background-color: ${standardColors.white1};
`;

const AboutSectionOneIntroStyled = styled(AboutSectionOneIntro)`
  @media screen and ${device.laptop} {
    width: 85%;
  }
`;

const AboutSectionOneParagraphStyled = styled(AboutSectionOneParagraph)`
  @media screen and ${device.laptop} {
    width: 85%;
  }
`;

export {
  AboutSectionOneStyled,
  AboutSectionOneIntroStyled,
  AboutSectionOneParagraphStyled,
};
