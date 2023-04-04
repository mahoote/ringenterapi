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
  width: 85%;
`;

const AboutSectionTwoParagraphItemStyled = styled(AboutSectionTwoParagraphItem)`
  @media screen and ${device.tablet} {
  }
`;

export {
  AboutSectionTwoStyled,
  AboutSectionTwoContentStyled,
  AboutSectionTwoParagraphItemStyled,
};
