import styled from "styled-components";
import { standardColors } from "../../../../palettes/standardColors.style";
import {
  AboutSectionOne,
  AboutSectionOneIntro,
  AboutSectionOneParagraph,
} from "./aboutSectionOne";

const AboutSectionOneStyled = styled(AboutSectionOne)`
  background-color: ${standardColors.white1};
`;

const AboutSectionOneIntroStyled = styled(AboutSectionOneIntro)`
  width: 85%;
`;

const AboutSectionOneParagraphStyled = styled(AboutSectionOneParagraph)`
  width: 85%;
`;

export {
  AboutSectionOneStyled,
  AboutSectionOneIntroStyled,
  AboutSectionOneParagraphStyled,
};
