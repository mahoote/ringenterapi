import styled from "styled-components";
import {
  AboutSectionTwo,
  AboutSectionTwoContent,
  AboutSectionTwoParagraphItem,
} from "./aboutSectionTwo";
import { device } from "../../../../sizes/screenSize.style";

const AboutSectionTwoStyled = styled(AboutSectionTwo)`
  background-color: white;
`;

const AboutSectionTwoContentStyled = styled(AboutSectionTwoContent)`
  @media screen and ${device.tabletMax} {
    width: 85%;
  }
`;

const AboutSectionTwoParagraphItemStyled = styled(
  AboutSectionTwoParagraphItem
)``;

export {
  AboutSectionTwoStyled,
  AboutSectionTwoContentStyled,
  AboutSectionTwoParagraphItemStyled,
};
